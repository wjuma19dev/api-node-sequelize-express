const user = require('../db/models/user');
const { appError } = require('../helpers/appError');
const { generateToken } = require('../helpers/generateToken');

const signup = async (req, res, next) => {
	const body = req.body;
	if (!['1', '2'].includes(req.body.userType)) {
		return next(appError('fail', 400, 'Invalid user type'));
	}
	const newUser = await user.create({
		firstName: body.firstName,
		lastName: body.lastName,
		email: body.email,
		password: body.password,
		userType: body.userType,
		confirmPassword: body.confirmPassword,
	});

	const result = newUser.toJSON();

	// Delete from newUser object password and deletedAt
	delete result.password;
	delete result.deletedAt;

	// Add user token
	result.token = generateToken({ id: result.id });

	if (!result) {
		return next('fail', 400, 'Failed to create the user');
	}
	res.json({ status: 'success', data: result });
};

module.exports = {
	signup,
};
