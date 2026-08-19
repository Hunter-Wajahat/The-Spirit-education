const express = require('express');
const handleAuthor = require("../controllers/authorHandler");

const router = express.Router();

//POST requests
router.post('/signin', handleAuthor)

//GET requests
router.get('/my_dashboard')
module.exports = router;