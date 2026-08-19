const Author = require('../models/authorSchema')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET;
async function handleAuthor(req, res) {
    const { username, password } = req.body;
    try {

        if (password == process.env.author_PASS) {
            
            const author = new Author({ username, password, admin:true })
            await author.save()

            const payload = {
                user: username,
                pass: password,
                admin: true
            }
            const token = jwt.sign(payload, JWT_SECRET)

            res.cookie("authorized", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).json({ success: true, redirectUrl: process.env.frontend_server });
        }
        else{
            res.status(401).json({unauthorized:"unauthorized", success: false})
            console.log(req.body)
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
module.exports = handleAuthor;