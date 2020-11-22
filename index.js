//Reikalingu dependencies includinimas
let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

//Pagrindiniu kintamuju defininimas
let app = express()
let port = process.env.PORT || 3000;
let { DB_url } = require('./config/keys')

//Middleware includinimas
require('./models/User');
require('./models/Verification')
let authRoutes = require('./routes/authentication')
let requireToken = require('./middleware/requireToken')

app.use(bodyParser.json());
app.use(authRoutes)

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