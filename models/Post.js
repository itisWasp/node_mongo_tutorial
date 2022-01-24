const mongoose = require('mongoose');

const schemas = mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Post', schemas);