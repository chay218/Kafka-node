const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {type: String, default:''},
});

module.exports = mongoose.model('MovieModel', MovieSchema);