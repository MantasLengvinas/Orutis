let jwt = require('jsonwebtoken')
let mongoose = require('mongoose')

let User = mongoose.model('User')
let { jwtkey, messages } = require('../config/keys')

module.exports = (req, res, next) => {
    let { authorization } = req.headers;
    if(!authorization){       
        return res.status(401).send({error: messages.error.notAuthenticated});
    }    

    let token = authorization;
    jwt.verify(token, jwtkey, async (err, payload) => {
        if(err){
            return res.status(401).send({error: messages.error.notAuthenticated});
        }
        let {userId} = payload;
        let user = await User.findById(userId);
        req.user = user;
        next();
    });
}