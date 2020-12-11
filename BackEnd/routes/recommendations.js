let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken')

let { jwtkey, messages } = require('../config/keys')
let router = express.Router();
let User = mongoose.model('User');

router.post("/activities", (req, res) => {

});

router.post("/outfit", (req, res) => {
    
})

module.exports = router;