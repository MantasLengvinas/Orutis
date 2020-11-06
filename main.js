let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let app = express()
let port = 3000;
let { DB_url } = require('./config/keys')

require('./models/User');
let authRoutes = require('./routes/authentication')
let requireToken = require('./middleware/requireToken')

app.use(bodyParser.json());
app.use(authRoutes)

//Connection to database
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


app.get('/', requireToken, (req, res) => {
    res.send(`Sveiki, ${req.user.username}`);
})
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});