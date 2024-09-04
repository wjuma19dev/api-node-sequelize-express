const handlerError = (error, req, res, next) => {
	let { stack, message, statusCode } = error;
	statusCode = statusCode ? statusCode : 500;
	res.status(statusCode).json({
		status: 'fail',
		statusCode: statusCode,
		message,
		stack,
	});
};

module.exports.handlerError = handlerError;
