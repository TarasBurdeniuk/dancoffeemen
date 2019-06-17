import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

const ProductDetailsContainer = () => {
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState('');
	const [availability] = useState(true);
	const [starsRate, setStarsRate] = useState(3);

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

	const handleChangeRate = num => {
		setStarsRate(num);
	};

	return (
		<ProductDetails
			quantity={quantity}
			size={size}
			availability={availability}
			starsRate={starsRate}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
			handleChangeSize={handleChangeSize}
			handleChangeRate={handleChangeRate}
		/>
	);
};

export default ProductDetailsContainer;
