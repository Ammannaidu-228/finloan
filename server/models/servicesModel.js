const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
    },
    loans:{
        type: Array,
        required: true,
    }
});

const Services = mongoose.model('services', servicesSchema);

module.exports = Services;