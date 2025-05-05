const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({

    mobile:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Members',
        required: true,
    },
    email:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Members',
        required: true,
    },
    amt:{
        type: Number,
        required: true,
    },
    type:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Services',
        required: true,
    },
    msg:{
        type: String,
        required: true,
    },
    code:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Services',
        required: true,
    }

});

const Request = mongoose.model('request', requestSchema);

module.exports = Request;