const mongoose = require('mongoose')

const gymTemplate = new mongoose.Schema({
    gymName: { type:String },
    email: { type:String,
             lowercase: true,
             unique: true
    },
    phoneNumber:{
        type:String
    },
    password: {
        type:String,
        required:true
    },
    addresses:{
        type: [{
            street: {type:String},
            apt: {type: String},
            city: {type: String},
            zipcode: {type:String},
            state: {type:String},
            country: {type:String}
        }]
    }
},
{collection: 'gyms'})

module.exports = mongoose.model('gyms', gymTemplate)