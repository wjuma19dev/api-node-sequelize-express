/**
 * Crea una nueva instancia de new Error
 * @param  {string} status     [description]
 * @param  {number} statusCode [description]
 * @param  {string} message    [description]
 * @return {object}            [description]
 */
const appError = (status, statusCode, message) => {
	const error = new Error();
	error.status = status;
	error.message = message;
	error.statusCode = statusCode ? statusCode : 500;
	return error;
};

module.exports = {
	appError,
};
