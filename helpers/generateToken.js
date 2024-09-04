const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

module.exports.generateToken = generateToken;
