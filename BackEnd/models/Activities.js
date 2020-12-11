let mongoose = require('mongoose');
let User = mongoose.model('User');
let { messages } = require('../config/keys')

let activitiesSchema = new mongoose.Schema({
    location: {
        type: String,
        unique: true
    },
    img: {
        type: String,
        default: null
    },
    desc: {
        type: String,
        default: null
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
    isOutside: {
        type: Boolean,
        default: null
    },
    areAnimalsAllowed: {
        type: Boolean,
        default: null
    },
    isPaid: {
        type: Boolean,
        default: null
    },
    isSport: {
        type: Boolean,
        default: null
    },
    isOfficial: {
        type: Boolean,
        default: null
    }
})


mongoose.model('Activities', activitiesSchema);