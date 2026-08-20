const express = require('express');
const handleAuthor = require("../controllers/authorHandler");
const DashboardAuth = require('../controllers/dashboardAuth');
const authMiddleware = require('../middlewares/authanticationMiddlware');
const postBloag = require('../controllers/postBlog');

const router = express.Router();

//POST requests
router.post('/signin', handleAuthor)
router.post('/post_blog', authMiddleware, postBloag)

//GET requests
router.get('/my_dashboard',authMiddleware,  DashboardAuth)
module.exports = router;