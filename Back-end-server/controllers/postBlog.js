const Blog = require('../models/blogSchema')
async function postBloag(req, res) {
    console.log(req.body)
    try {  
        
        const {author, body, catagory, title, publish} = req.body;
        console.log(req.body)
        const blog = new Blog({author, body, catagory, tittle:title, publish  })
        await blog.save()
        res.status(201).json({message:"blog is saved"})
    } catch (err) {
        res.json({error: err, message: "somethis is wrong while creating blog"})
    }
}

module.exports = postBloag;