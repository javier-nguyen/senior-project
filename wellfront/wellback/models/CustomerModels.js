const mongoose = require('mongoose')

const customerTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required: true

    },
    username: {
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{collection: 'customers'})

module.exports = mongoose.model('customers', customerTemplate)