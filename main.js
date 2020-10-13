let express = require("express")
let fs = require('fs')
let http = require("http")

let app = express()
let port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));  //Public failai (img, css, js)
app.set('trust proxy', true);

app.listen(port, function() {
    console.log("Serveris paleistas");
});

app.get('', (req, res) => {
    res.status(200).send("Labas");
});