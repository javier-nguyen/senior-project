const mongoose = require('mongoose')

const gymTemplate = new mongoose.Schema({
    gym_id: {
        type:String,
        required: true,
        unique: true

    },
    customer_id: {
        type:String,
        required: true,
        unique: true
    },
    gym_loc_id: {
        type:String,
        required: true
    },
    request_time:{
        type:String,
        required:true,
        unique:true
    },
    session_start_time: {
        type:String,
        required:true
    },
    session_end_time: {
        type:String,
        required: true
    },
    session_wait_time: {
        type:String,
        required: true
    },
    customer_rating:{
        type:Date,
        default:Date.now
    },
    gym_rating:{
        type:Date,
        default:Date.now
    }
},
{collection: 'sessions'})

module.exports = mongoose.model('sessions', sessionTemplate)