const jwt = require('jsonwebtoken');
const config = require('config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
	// Get token from header
	const token = req.header('x-auth-token');

	// Verify token
	try {
		if (token) {
			const decoded = jwt.verify(token, config.get('jwtSecret'));
			req.user = decoded.user;
			next();
		} else {
			next();
		}
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
