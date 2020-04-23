//this is my JSON schema that is used to structure my database

const mongoose = require ("mongoose");
const tickets = new mongoose.Schema({
    
    name:{
        type: String
    },
    type:{
        type: String
    },
    avaliables:{
        type: Number
    },
    price:{
        type: Number
    }
});

module.exports = mongoose.model("Tickets", tickets);