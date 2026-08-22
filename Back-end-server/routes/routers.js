const express = require('express');
const handleAuthor = require("../controllers/authorHandler");
const DashboardAuth = require('../controllers/dashboardAuth');
const authMiddleware = require('../middlewares/authanticationMiddlware');
const postBlog = require('../controllers/postBlog');
const upload = require('../middlewares/upload')

const router = express.Router();

//POST requests
router.post('/signin', handleAuthor)
router.post('/post_blog', upload.single("blogimg"),authMiddleware, postBlog)

//GET requests
router.get('/my_dashboard',authMiddleware,  DashboardAuth)
module.exports = router;