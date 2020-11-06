let jwt = require('jsonwebtoken')
let mongoose = require('mongoose')

let User = mongoose.model('User')
let { jwtkey } = require('../config/keys')

module.exports = (req, res, next) => {
    let { authorization } = req.headers;
    if(!authorization){       
        return res.status(401).send({error: "Jums reikia prisijungti!"});
    }    

    let token = authorization;
    jwt.verify(token, jwtkey, async (err, payload) => {
        if(err){
            return res.status(401).send({error: "Jums reikia prisijungti!"});
        }
        let {userId} = payload;
        let user = await User.findById(userId);
        req.user = user;
        next();
    });
}