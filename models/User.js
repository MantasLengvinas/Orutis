let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let { messages } = require('../config/keys')

//Vartotojo duomenu schema, pagal kuria saugomi duomenys apie vartotoja

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: null
    }, //Pomegiai
    likeColdWeather: {
        type: Boolean,
        default: null
    },
    likeBeingOutside: {
        type: Boolean,
        default: null
    },
    likeActiveFreeTime: {
        type: Boolean,
        default: null
    },
    doTravelWithPets: {
        type: Boolean,
        default: null
    },
    likeFreeActivities: {
        type: Boolean,
        default: null
    }

})

//Slaptazodzio tikrinimas
userSchema.methods.comparePassword = function(password){
    let user = this;

    return new Promise((resolve, reject) => {
		bcrypt.compare(password, user.password, (err, isMatch) => {
			if(err)
				return reject(err);
			if(!isMatch)
				return reject(err);
        })
        resolve(true);
    })
}

//Slaptazodzio hash'inimas
userSchema.pre('save',function(next){
	let user = this;
	
	bcrypt.genSalt(10, (err, salt) => {
		if(err)
			return next(err);
		bcrypt.hash(user.password, salt, (err, hash) => {
			if(err)
				return next(err);
			
			user.password = hash;
			next();
		});
	});
});

mongoose.model('User', userSchema);