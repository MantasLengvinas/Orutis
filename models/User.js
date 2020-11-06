let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

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
    }

})

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