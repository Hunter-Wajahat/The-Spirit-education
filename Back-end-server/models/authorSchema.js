const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    username: String,
    password: String,
    admin: {
        type:Boolean,
        default: false
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;