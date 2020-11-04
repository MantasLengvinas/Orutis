let express = require('express')

let router = express.Router();

router.get('/signup', (req, res) => {
    res.send('Registracija');
})

router.post('/signup', (req, res) => {
    
})

router.post('/signin', (req, res) => {
    
})

module.exports = router;