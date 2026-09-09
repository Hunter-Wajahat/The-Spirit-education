const Blog = require('../models/blogSchema')
async function postBlog(req, res) {
    console.log(req.body)
    try {
        const { _id, author, body, catagory, title, publish, } = req.body;
        console.log(req.body)

        if (_id) {
            const blog = await Blog.findByIdAndUpdate(
                _id,
                { author, body, catagory, tittle: title, publish },
                { new: true, runValidators: true }
            )

            if (!blog) {
                return res.status(404).json({ message: "blog not found" })
            }

            return res.status(200).json({ message: "blog is updated", blog })
        }

        const blog = new Blog({
            author,
            body,
            catagory,
            tittle: title,
            publish,
        })
        await blog.save()
        res.status(201).json({ message: "blog is saved" })
    } catch (err) {
        res.json({ error: err, message: "somethis is wrong while creating blog" })
    }
}

module.exports = postBlog;