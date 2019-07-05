import React, { useState } from 'react';
import Container from './Container';
import products from './temporaryProducts/products';

const ProductsGrid = () => {
	const [sorting, setSorting] = useState('');
	const [productsFrom, setProductsFrom] = useState(1);
	const [productsTo, setProductsTo] = useState(12);
	const [quantity, setQuantity] = useState(12);

	const handleChangeSorting = event => {
		const { value } = event.target;
		setSorting(value);
	};

	const handleSelectGrid = () => {
		setQuantity(12);
		setProductsFrom(1);
		setProductsTo(12);
	};

	const handleSelectList = () => {
		setQuantity(4);
		setProductsFrom(1);
		setProductsTo(4);
	};

	const handleChangePage = event => {
		const { innerText } = event.target;
		const numFrom = innerText * quantity - (quantity - 1);
		let numTo = innerText * quantity;
		if (numTo > products.length) numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const handleChangeFirstPage = () => {
		const numFrom = 1;
		const numTo = numFrom + quantity - 1;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const handleChangePrevPage = () => {
		if (productsFrom !== 1) {
			const numFrom = productsFrom - quantity;
			const numTo = numFrom + quantity - 1;
			setProductsFrom(numFrom);
			setProductsTo(numTo);
		}
	};

	const handleChangeNextPage = () => {
		if (productsTo < products.length) {
			const numFrom = productsFrom + quantity;
			const numTo = numFrom + quantity - 1;
			setProductsFrom(numFrom);
			setProductsTo(numTo);
		}
	};

	const handleChangeLastPage = () => {
		const numFrom = Math.floor(products.length / quantity) * quantity + 1;
		const numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	return (
		<Container
			products={products}
			sorting={sorting}
			productsFrom={productsFrom}
			productsTo={productsTo}
			quantity={quantity}
			handleChangeSorting={handleChangeSorting}
			handleSelectGrid={handleSelectGrid}
			handleSelectList={handleSelectList}
			handleChangePage={handleChangePage}
			handleChangeFirstPage={handleChangeFirstPage}
			handleChangePrevPage={handleChangePrevPage}
			handleChangeNextPage={handleChangeNextPage}
			handleChangeLastPage={handleChangeLastPage}
		/>
	);
};

export default ProductsGrid;
