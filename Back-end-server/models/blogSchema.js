const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    tittle: String,
    author: String,
    body: String,
    date:{type: Date, default: Date.now},
    catagory: String,
    publish: Boolean,
   blogImage: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;