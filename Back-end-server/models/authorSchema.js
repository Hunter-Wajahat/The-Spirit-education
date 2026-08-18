const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    password: String,
    author: {
        type:Boolean,
        default: false
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;