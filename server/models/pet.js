var mongoose = require("mongoose")

var PetSchema = new mongoose.Schema({
    name:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Pet name is required"
            },

    type:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Pet type is required"
            },

    desc:{
        type: String,
        minlength: 3,
        required: true, 
        message: "desc is required",

        },

    likes:{
        type: Number,
        default: 0,
        message: "desc is required",

    },
    skill1:{
        type: String ,
        
        required: false,
        message: "Must be 3 chars"

    },    
    
    skill2:{
        type: String ,
        
        required: false,
        message: "Must be 3 chars"
    },    
    
    skill3:{
        type: String ,
        
        required: false,
        message: "Must be 3 chars"
    },


})

var Pet = mongoose.model('Pet', PetSchema)