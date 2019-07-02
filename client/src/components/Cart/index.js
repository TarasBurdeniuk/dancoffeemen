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

	const products = [
		{
			brand: 'Lavazza Pienaroma',
			size: 500,
			price: 18,
			src: 'temporaryImages/temporaryCart/image1.jpg',
			quantity: 22,
			id: 1,
		},
		{
			brand: 'Kimbo Napoletano',
			size: 250,
			price: 8,
			src: 'temporaryImages/temporaryCart/image2.jpg',
			quantity: 1,
			id: 2,
		},
		{
			brand: 'Illy Moka',
			size: 250,
			price: 15,
			src: 'temporaryImages/temporaryCart/image3.jpg',
			quantity: 70,
			id: 3,
		},
		{
			brand: 'Fineberry Nicaragua',
			size: 1000,
			price: 24,
			src: 'temporaryImages/temporaryCart/image4.jpg',
			quantity: 5,
			id: 4,
		},
	];

	return (
		<Container
			quantity={quantity}
			products={products}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
		/>
	);
};

export default Cart;
