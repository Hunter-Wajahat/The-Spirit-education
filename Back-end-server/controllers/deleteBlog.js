const Blog = require('../models/blogSchema')
async function DeleteMyBlog(req, res) {
    const { blogid } = req.params;
    console.log(blogid)
    try {
        await Blog.findByIdAndDelete(blogid)
        res.json({ message: "deleted succefully!!!" }) 
    } catch (err) {
        console.log("there is an error while deleting", err)
    }

}
module.exports = DeleteMyBlog;