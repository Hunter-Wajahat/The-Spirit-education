const express = require('express');
const handleAuthor = require("../controllers/authorHandler");
const DashboardAuth = require('../controllers/dashboardAuth');
const authMiddleware = require('../middlewares/authanticationMiddlware');
const postBlog = require('../controllers/postBlog');
const upload = require('../middlewares/upload');
const publishBlogs = require('../controllers/publishBlogs');
const getPublicblogById = require('../controllers/publicBlogByID');

const router = express.Router();

//POST requests
router.post('/signin', handleAuthor)
router.post('/post_blog', upload.single("blogimg"),authMiddleware, postBlog)

//GET requests
router.get('/my_dashboard',authMiddleware,  DashboardAuth)
router.get('/public_blogs', publishBlogs)
router.get('/single_blog', getPublicblogById)
module.exports = router;