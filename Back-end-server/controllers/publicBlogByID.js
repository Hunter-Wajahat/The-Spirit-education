const Blog = require('../models/blogSchema')
async function getPublicblogById(req, res) {
    try {
        console.log(req.query)
        const {blogId} = req.query;
        const blogData = await Blog.findById(blogId)
        console.log(blogData)
        res.json(blogData)
    } catch (err) {
        res.json({message: "there is an error while fetching blog:", error: err})
        console.log(err)
    }
}
module.exports = getPublicblogById;