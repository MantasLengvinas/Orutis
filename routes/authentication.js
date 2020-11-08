let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken')

let { jwtkey } = require('../config/keys')
let router = express.Router();
let User = mongoose.model('User');
let Verification = mongoose.model('Verification');
let mailer = require('../middleware/mailerSystem')

//Funkcija generuojanti slapta rakta, kuris naudojamas patvirtinant vartotojo email

let generateSecret = (length) => {
    var secret = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       secret += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return secret;
}

//Funkcija generuojanti emailo patvirtinimui skirta link'a

let generateLink = (hostname, secret) => {
    return `${hostname}:${3000}/verifyEmail?s=${secret}`;
}

let sendMail = async(userEmail, link, messageString) => {
	
	let info = await mailer.transporter.sendMail({
	from: 'orutislive@gmail.com', // sender
	to: userEmail, // receiver
	subject: "Orutis paskyros tvarkymas", // subject line
	text: messageString + link, // plain text body
	});
	
}
//Registracijos funkcija
router.post('/signup', async (req, res) => {
    let {username, email, password} = req.body; //Gaunami duomenys is input'u
    
    try{
        let user = new User({username, email, password});
        await user.save(); //Sukuriamas vartotojas pagal schema ir issaugomas

        let link = generateLink(req.hostname, generateSecret(10));
		
        let verification = new Verification({email, link});
        await verification.save(); //Sukuriamas ir issaugomas patvirtinimo link'as
        
		
        let token = jwt.sign({userId:user._id}, jwtkey); //Issaugomas web token'as
	
		sendMail(email, link, "Paspauskite šią nuorodą norėdami patvirtinti savo paskyrą: ");
		console.log("Sent mail to: " + email);
		
        res.send({token});
    }
    catch(err){
        res.status(422).send(err.message);
    }
})

//Prisijungimo funkcija
router.post('/signin', async (req, res) => {
    let {email, password} = req.body;

    //Patikrinama ar vartotojas kazka ivede
    if(!email || !password){
        res.status(422).send({error: "Iveskite duomenis"});
    }

    let user = await User.findOne({email});

    //Tikrinama ar toks vartotojas egzistuoja
    if(!user){
        res.status(422).send({error: "Vartotojas neegzistuoja"});
    }
    try{
        await user.comparePassword(password);
        let token = jwt.sign({userId:user._id}, jwtkey);
        res.send({token});
        //Tikrinama ar slaptazodis.
        //Jei teisingas, sukuriamas ir issaugomas web token'as (vartotojas prijungiamas)
    }catch(err){
        res.status(422).send(err.message);
    }
})


//Vartotojo patvirtinmo funkcija
router.get('/verifyEmail', async(req, res) => {
    let link = generateLink(req.hostname, req.query.s);

    let verify = await Verification.findOne({link});
    if(!verify){
        res.status(422).send({error: 'Patvirtinimas nebegalioja'});
    } //Tikrinama ar verify link'as nepasibaigusio galiojimo laiko ir(ar) nebuvo panaudotas

    try{
        await verify.verifyUser(verify.email); //Patvirtinamas vartotojas
        res.send(`Vartotojas (${verify.email}) sekmingai patvirtintas`);
    }
    catch(err){
        res.status(422).send(err.message);
    }
})

router.get('/forgotPassword', async (req, res) => {
    let {email} = req.body;
    let link = generateLink(req.hostname, generateSecret(20));

    let user = await User.findOne({email});
    if(!user){
        res.status(422).send({error: "Vartotojas neegzistuoja"});
    }

    if(!user.isVerified){
        res.status(422).send({error: "Vartotojas nepatvirtintas"});
    }

    try{
        let verification = new Verification({email, link});
        await verification.save();
		
		sendMail(email, link, "Paspauskite šią nuorodą norėdami atkurti savo slaptažodį: ")
        res.send("Slaptazodzio atstatymo laiskas issiustas");
    }
    catch(err){
        res.status(422).send({error: "Nepavyko atstatyti slaptazodzio"});
    }

})

router.post('/resetPassword', async (req, res) => {
    let {password, cpassword} = req.body;
    let link = generateLink(req.hostname, req.query.s);
    if(password !== cpassword){
        res.status(422).send({error: "Slaptazodziai nesutampa"});
    }

    let verify = await Verification.findOne({link});
    if(!verify){
        res.status(422).send({error: 'Atsatymo prasymas nebegalioja'});
    } //Tikrinama ar verify link'o galiojimo laikas pasibaiges ir(ar) nebuvo panaudotas

    try{
        await verify.changePassword(verify.email, password); //Patvirtinamas vartotojas
        res.send(`Vartotojo (${verify.email}) slaptazodis sekmingai pakeistas`);
    }
    catch(err){
        res.status(422).send(err.message);
    }
})

module.exports = router;