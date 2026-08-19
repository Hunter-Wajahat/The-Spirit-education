const express = require('express');
const handleAuthor = require("../controllers/authorHandler");
const DashboardAuth = require('../controllers/dashboardAuth');
const authMiddleware = require('../middlewares/authanticationMiddlware');

const router = express.Router();

//POST requests
router.post('/signin', handleAuthor)

//GET requests
router.get('/my_dashboard',authMiddleware,  DashboardAuth)
module.exports = router;