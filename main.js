let express = require('express')
let bodyParser = require('body-parser')

let app = express()
let port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Projektas');
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});