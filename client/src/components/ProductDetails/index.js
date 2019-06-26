import React, { useState } from 'react';
import Details from './Details';

const ProductDetailsContainer = () => {
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState('');
	const [availability] = useState(true);

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleChangeSize = event => {
		const { value } = event.target;
		setSize(value);
	};

	return (
		<Details
			quantity={quantity}
			size={size}
			availability={availability}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
			handleChangeSize={handleChangeSize}
		/>
	);
};

export default ProductDetailsContainer;
