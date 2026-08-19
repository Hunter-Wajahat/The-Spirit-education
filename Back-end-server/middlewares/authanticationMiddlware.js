const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get JWT from cookie
    const token = req.cookies.authorized;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. No token found.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;