let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken');
const requireToken = require('../middleware/requireToken');
const { messages } = require('../config/keys');

let router = express.Router();
let User = mongoose.model('User');

router.post('/getUsername', requireToken, async (req, res) => {
    let email = req.user.email;

    try{
        let user = await User.findOne({email})

        if(!user){
            res.status(422).send({error: messages.error.userDoNotExist});
        }
        res.send({username: user.username});
    }
    catch(e){
        res.status(422).send({error: e})
    }
})

module.exports = router;