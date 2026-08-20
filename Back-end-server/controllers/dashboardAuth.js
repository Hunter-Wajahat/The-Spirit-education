const jwt = require('jsonwebtoken')
function DashboardAuth(req, res) {
    try {
        const myToken = req.cookies.authorized;
        if (!myToken) {
            res.status(401).json({ admin: false, message: "unauthorized" })
        }
        const decoded = jwt.verify(myToken, process.env.JWT_SECRET)
        console.log("the decoded token: ", decoded)
        res.json({ username: decoded.user, admin: decoded.admin })

    } catch (err) {
        res.json({ message: `there is an error: ${err}`, admin:false })
    }
}

module.exports = DashboardAuth;