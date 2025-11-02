const mongoose = require('mongoose')

//this is a metadata class as opposed to a utility class
const VillianSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    score : {
        type: Number
    },
    url : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('daddy', VillianSchema)