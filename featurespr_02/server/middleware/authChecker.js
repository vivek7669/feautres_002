const jwt = require('jsonwebtoken');

const authChecker = async (req, res, next) => {
    let token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token is required' });
    }

    try {

        const decoded = jwt.verify(token, 'your_secret_key'); 

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = authChecker;
