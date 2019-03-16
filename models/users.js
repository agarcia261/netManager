const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    perID:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    role:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate: [
            // Function takes in the new `password` value to be saved as an argument
            input => {
              // If this returns true, proceed. If not, return the error message below
              return input.length >= 6;
            },
            // Error Message
            "Password should be longer than 6 characters."
          ]
    },
    createdOn:{
        type:Date,
        default:Date.now
    }

});

const Users = mongoose.model('users', UserSchema)

module.exports = Users