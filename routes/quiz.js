let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken');
const requireToken = require('../middleware/requireToken');
const { messages } = require('../config/keys');

let router = express.Router();
let User = mongoose.model('User');

let setDataPoint = q => {
    switch(q){
        case '1': 
            return 'likeColdWeather';
        break;
        case '2':
            return 'likeBeingOutside';
        break;
        case '3': 
            return 'likeActiveFreeTime';
        break;
        case '4': 
            return 'doTravelWithPets';
        break;
        case '5':
            return 'likeFreeActivities';
        break;
        default: 
            return null;
    }
}

router.post('/quiz', requireToken, async (req, res) => {

    let q = req.query.q;
    let {value} = req.body;
    let email = req.user.email;

    let dataPoint = setDataPoint(q);

    try{ 
        let user = await User.findOne({email});
        console.log(user.email);
        if(!user){
            res.status(422).send({error: messages.error.notAuthenticated});
        }
        user[dataPoint] = value;
        if(!user.save()){
            res.status(422).send({error: messages.error.failedToAddDataPoint});
        }
        res.send({success: messages.success.saveUserData})
    }
    catch(e) {
        res.status(422).send(e);
    }

})

router.post('/quizHasBeenCompleted', requireToken, async (req, res) => {
    let email = req.user.email;

    try{
        let user = await User.findOne({email});
        if(!user){
            res.status(422).send({error: messages.error.notAuthenticated});
        }
        if(user.likeColdWeather == null || user.likeFreeActivities == null){
            res.status(422).send({error: messages.error.quizHasNotBeenCompleted});
        }
        res.send({success: messages.success.quizHasBeenCompleted});
    }
    catch(e){
        res.status(422).send({error: e});
    }
})

module.exports = router;