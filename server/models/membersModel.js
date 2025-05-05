const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    mobile:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    occupation:{
        type:String,
        required: true
    },
    createPassword:{
        type: String,
        required: true,
    }
});

const Members = mongoose.model('members', memberSchema);

module.exports = Members;