const mongoose = require('mongoose')

const gridsTemplate = new mongoose.Schema({
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
{collection: 'grids'})

module.exports = mongoose.model('grids', gridsTemplate)