let mongoose = require('mongoose');
let User = mongoose.model('User');
let { messages } = require('../config/keys')

//Patvirtinimo linko schema, pagal kuria saugomi duomenys duomenu bazeje

let activitiesSchema = new mongoose.Schema({
    location: {
        type: String,
        unique: true
    },
    weatherTemperature: {
        type: Boolean,
        default: null
    },
    sunnyDay: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Date,
        default: Date.now,
        expires: 600
    }
})


mongoose.model('Verification', verificationSchema);