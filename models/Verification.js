let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let User = mongoose.model('User');
let { messages } = require('../config/keys')

//Patvirtinimo linko schema, pagal kuria saugomi duomenys duomenu bazeje

let verificationSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    link: {
        type: String,
        unique: true
    },
    isUsed: {
        type: Boolean,
        default: false
    },
    activeTo: {
        type: Date,
        default: Date.now,
        expires: 600
    }
})

//Funkcija patvirtinanti vartotoja ir istrinanti verify link'a
verificationSchema.methods.verifyUser = async function(email) {
    let verify = this;
    let user = await User.findOne({email}); //Randamas patvirtinamas vartotojas
    console.log(user);

    return new Promise((resolve, reject) => {
        user.isVerified = true;
        if(!verify.deleteOne({email})){ //Jei del klaidos nepavyktu istrinti verify linko, patvirtinimas nebutu vykdomas
            return reject(messages.error.failedToDeleteVerification);
        }
        if(!user.save()){ //Jei nepavyktu patvirtint vartotojo, butu grazinama klaida
            return reject(messages.error.failedToVerifyUser);
        }
        resolve(true);
    })

}

verificationSchema.methods.changePassword = async function(email, password) {
    let verify = this;
    let user = await User.findOne({email});

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if(err)
                return reject(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if(err)
                    return reject(err);
                
                user.password = hash;
                if(!verify.deleteOne({email})){ //Jei del klaidos nepavyktu istrinti verify linko, patvirtinimas nebutu vykdomas
                    return reject(messages.error.failedToDeletePasswordResetRequest);
                }
                if(!user.save()){
                    return reject(messages.error.failedToResetPassword);
                }
                resolve(true);
            });
        });
    })
}

mongoose.model('Verification', verificationSchema);