import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    tittle: String,
    author: String,
    body: String,
    date:{type: Date, default: Date.now},
    catagory: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;