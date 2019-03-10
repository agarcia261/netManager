const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MirrorSchema = new Schema({
    router:{
        type:String,
        required:true
    },
    sap:{
        type:String,
        required:true
    },
    expiration:{
        type:Date,
        required:true
    },
    timeOutInstance:{
        type:Date,
    },
    createdOn:{
        type:Date,
        default:Date.now
    }

});

//Creating the model from the schema above
const Mirror = mongoose.model('mirror', MirrorSchema)
//export the Mirror Model
module.exports = Mirror