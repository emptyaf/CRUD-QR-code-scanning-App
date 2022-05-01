const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpu:{
        type: String,
        required: true
    },
    ram:{
        type: String,
        required: true
    },
    storage:{
        type: String,
        required: true
    }
});

const Laptopdb = mongoose.model('laptopdb', schema);

module.exports = Laptopdb;