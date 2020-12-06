//Reikalingu dependencies includinimas
let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let cors = require('cors')

//Pagrindiniu kintamuju defininimas
let app = express()
let port = process.env.PORT || 3000;
let { DB_url } = require('./config/keys')

//Middleware includinimas

//CORS policy blokavimo prevencija
app.options('*', cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
 
require('./models/User');
require('./models/Verification')
let requireToken = require('./middleware/requireToken')
let authRoutes = require('./routes/authentication')
let quizRoutes = require('./routes/quiz')
let userRoutes = require('./routes/user')


app.use(bodyParser.json());
app.use(authRoutes)
app.use(quizRoutes)
app.use(userRoutes)

//Prisijungimas prie duomenu bazes
mongoose.connect(DB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
})

mongoose.connection.on('error', (err) => {
    console.log('Cannot connect to DB', err);
})

//Pagrindinio puslapio route'as
app.get('/', requireToken, (req, res) => {
    res.send(`Sveiki, ${req.user.username}`);
})

//Serverio paleidimas
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});