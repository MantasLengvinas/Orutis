let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken')
let  path = require('path')
const { body, validationResult } = require('express-validator');

let { jwtkey, messages } = require('../config/keys')
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

let generateLink = (hostname, page, secret) => {
    if(hostname !== "localhost"){
        return `${hostname}/${page}?s=${secret}`;
    }
    return `${hostname}:${3000}/verifyEmail?s=${secret}`;
}

let sendMail = async(userEmail, link, subj, messageString) => {

    let message;
    if(link != null){
        message = messageString + `<a href="${link}">${link}</a>`;
    }
    else{
        message = messageString;
    }
	
	let info = await mailer.transporter.sendMail({
	from: 'orutislive@gmail.com', // sender
	to: userEmail, // receiver
	subject: subj, // subject line
	html: message,
	});
	
}
//Registracijos funkcija
router.post('/signup', async (req, res) => {
    let {username, email, password} = req.body; //Gaunami duomenys is input'u
    
    try{
        let user = new User({username, email, password});
        await user.save(); //Sukuriamas vartotojas pagal schema ir issaugomas

        let link = generateLink(req.hostname, "verifyEmail", generateSecret(10));
		
        let verification = new Verification({email, link});
        await verification.save(); //Sukuriamas ir issaugomas patvirtinimo link'as
        
		
        let token = jwt.sign({userId:user._id}, jwtkey); //Issaugomas web token'as
	
		sendMail(email, link, "Orutis paskyros tvarkymas", messages.requests.emailVerification);
		console.log("Sent mail to: " + email);
		
        res.send({token});
    }
    catch(err){
        res.status(422).send({error: err.message});
    }
})

//Prisijungimo funkcija
router.post('/signin', async (req, res) => {
    let {email, password} = req.body;

    //Patikrinama ar vartotojas kazka ivede
    if(!email || !password){
        res.status(422).send({error: messages.error.noInput});
    }

    let user = await User.findOne({email});

    //Tikrinama ar toks vartotojas egzistuoja
    if(!user){
        res.status(422).send({error: messages.error.userDoNotExist});
    }
    try{
        await user.comparePassword(password)
        let token = jwt.sign({userId:user._id}, jwtkey);
        res.send({token});
    }catch(err){
        res.status(422).send(err);
    }
})


//Vartotojo patvirtinmo funkcija
router.get('/verifyEmail', async(req, res) => {
    // let link = generateLink(req.hostname, "verifyEmail", req.query.s);

    // let verify = await Verification.findOne({link});
    // if(verify == null){
    //     res.status(422).send({error: messages.error.verificationExpired});
    // }
    let link = "orutis.live/verifyEmail?s=GaZLKLS8xY"
    let verify = await Verification.findOne({link});
    let e = verify.email;
    console.log(verify);
    
    if(!verify){
        res.status(422).send({error: messages.error.verificationExpired});
    } //Tikrinama ar verify link'as nepasibaigusio galiojimo laiko ir(ar) nebuvo panaudotas

    try{
        await verify.verifyUser(verify.email); //Patvirtinamas vartotojas
        sendMail(e, null, "Sveiki atvykę!", messages.success.welcome);
        res.send(`Vartotojas (${verify.email}) sekmingai patvirtintas`);     
    }
    catch(err){
        res.status(422).send(err.message);
    }
})

router.post('/forgotPassword', async (req, res) => {
    let {email} = req.body;
    let link = generateLink(req.hostname, "resetPassword", generateSecret(20));

    let user = await User.findOne({email});
    if(!user){
        res.status(422).send({error: messages.error.userDoNotExist});
    }

    if(!user.isVerified){
        res.status(422).send({error: messages.error.userIsNotVerified});
    }

    try{
        let verification = new Verification({email, link});
        await verification.save();
		
		sendMail(email, link, "Orutis paskyros tvarkymas", messages.requests.passwordReset);
        res.send({success: "Slaptazodzio atstatymo laiskas issiustas"});
    }
    catch(err){
        res.status(422).send({error: messages.error.failedToResetPassword});
    }

})

router.post('/resendEmail', async (req, res) => {
    let {email} = req.body;
    let link = generateLink(req.hostname, "verifyEmail", generateSecret(10));

    try{
        let verification = new Verification({email, link});
        await verification.save();
    
        sendMail(email, link, "Orutis paskyros tvarkymas", messages.requests.emailVerification);
        console.log("Sent mail to: " + email);

        res.send("Patvirtinimo laiškas išsiųstas adresu: " + email);
    }
    catch(err){
        res.status(422).send(messages.error.failedToSendEmail);
    }

})

router.get('/resetPassword', (req, res) => {
    let link = generateLink(req.hostname, "resetPassword", req.query.s);
    res.render(path.join(__dirname+'/pages/resetPassword.ejs'), {link});
})

router.post('/resetPassword', async (req, res) => {
    let {password, cpassword, link} = req.body;
    if(password !== cpassword){
        res.status(422).send({error: messages.error.enteredPasswordsDoNotMatch});
    }

    let verify = await Verification.findOne({link});
    if(!verify){
        res.status(422).send({error: messages.error.passwordResetExpired});
    } //Tikrinama ar verify link'o galiojimo laikas pasibaiges ir(ar) nebuvo panaudotas

    try{
        await verify.changePassword(verify.email, password); //Patvirtinamas vartotojas
        res.send({success: `Vartotojo (${verify.email}) slaptazodis sekmingai pakeistas`});
    }
    catch(err){
        res.status(422).send({error: err.message});
    }
})

module.exports = router;