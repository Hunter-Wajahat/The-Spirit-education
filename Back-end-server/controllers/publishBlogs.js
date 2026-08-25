const Blog = require('../models/blogSchema')
async function publishBlogs(req, res) {
    const blogs = await Blog.find({ publish: true })
    res.json(blogs)
}
module.exports = publishBlogs;