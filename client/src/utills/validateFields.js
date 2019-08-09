export const validateName = name => {
	const regex = /[A-Za-z]{3,}/;

	return !regex.test(name) ? 'The name must contain at least three letters' : '';
};

export const validateEmail = email => {
	// eslint-disable-next-line no-useless-escape
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return !regex.test(String(email).toLowerCase()) ? 'Not valid email' : '';
};

export const validatePhone = phone => {
	const regex = /^\+?[0-9]{10,14}$/;

	return regex.test(phone) ? '' : 'Not valid phone';
};

export const validatePassword = password => {
	return password.length <= 6 ? 'Password must be 6 or more character' : '';
};

export const validateCVV = cvv => {
	return cvv.length === 3 ? '' : 'CVV must contains 3 digits';
};
