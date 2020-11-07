let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let User = mongoose.model('User');

//Nustatomas laikas iki kada galioja patvirtinimo linkas
let dn = new Date(),
    dt = new Date(dn);
dt.setMinutes(dn.getMinutes() + 10);

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
        default: dt
    }
})

//Funkcija patvirtinanti vartotoja ir istrinanti verify link'a
verificationSchema.methods.verifyUser = async function(email) {
    let verify = this;
    let user = await User.findOne({email}); //Randamas patvirtinamas vartotojas

    return new Promise((resolve, reject) => {
        user.isVerified = true;
        if(!verify.deleteOne({email})){ //Jei del klaidos nepavyktu istrinti verify linko, patvirtinimas nebutu vykdomas
            return reject("Failed to delete verification");
        }
        if(!user.save()){ //Jei nepavyktu patvirtint vartotojo, butu grazinama klaida
            return reject("User not verified");
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
                    return reject("Failed to delete verification");
                }
                if(!user.save()){
                    return reject("Nepavyko pakeisti slaptazodzio");
                }
                resolve(true);
            });
        });
    })
}

mongoose.model('Verification', verificationSchema);