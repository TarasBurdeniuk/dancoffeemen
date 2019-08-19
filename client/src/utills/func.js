export const prettyDate = data => {
	return new Date(data).toLocaleDateString();
};

export const calc = (price, quantity) => {
	return (price * 1000 * quantity) / 1000;
};
