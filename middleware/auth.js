const jwt = require('jsonwebtoken');
const config = require('config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
	// Get toket from header
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authozitation denied' });
	}

	// Verify token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
