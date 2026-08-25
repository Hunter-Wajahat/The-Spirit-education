const Blog = require('../models/blogSchema')
async function giveAllBlogsToAuthor(req, res) {
    const allBlogs = await Blog.find();
    res.json(allBlogs)
}

module.exports = giveAllBlogsToAuthor;