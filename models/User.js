let mongoose = require('mongoose');

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
        if(password !== user.password){
            return reject('err');
        }
        resolve(true);
    })
}

mongoose.model('User', userSchema);