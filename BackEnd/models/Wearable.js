let mongoose = require('mongoose');
let User = mongoose.model('User');
let { messages } = require('../config/keys')

//Patvirtinimo linko schema, pagal kuria saugomi duomenys duomenu bazeje

let wearableSchema = new mongoose.Schema({
    wType: {
        type: String
    },
    forColdDay: {
        type: Boolean,
        default: null
    },
    officialWear: {
        type: Boolean,
        default: null
    },
    forSport: {
        type: Boolean,
        default: null
    }
})


mongoose.model('Wearable', wearableSchema);