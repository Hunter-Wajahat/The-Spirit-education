const Blog = require('../models/blogSchema')
async function getPublicblogById(req, res) {
    try {
        const {blogId} = req.body;
        const blogData = await Blog.findById(blogId)
        console.log(blogData)
        res.json(blogData)
    } catch (err) {
        res.json({message: "there is an error while fetching blog:", error: err})
    }
}
module.exports = getPublicblogById;