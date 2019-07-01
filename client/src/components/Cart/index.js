import React, { useState } from 'react';
import Container from './Container';

const Cart = () => {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<Container
			quantity={quantity}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
		/>
	);
};

export default Cart;
