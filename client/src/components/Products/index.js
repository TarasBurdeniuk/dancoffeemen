import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import { loadProducts } from '../../actions/products';
import PropTypes from 'prop-types';
import Spinner from '../Loading';

const ProductsGrid = ({ product: { products, filteredProducts, start }, loadProducts }) => {
	useEffect(() => {
		loadProducts(start);
	}, []);

	const [sorting, setSorting] = useState('');
	const [quantity, setQuantity] = useState(12);

	const handleChangeSorting = event => {
		const { value } = event.target;
		setSorting(value);
	};

	const handleSelectGrid = () => {
		setQuantity(12);
	};

	const handleSelectList = () => {
		setQuantity(4);
	};

	return !products.length ? (
		<Spinner />
	) : (
		<>
			<Container
				products={filteredProducts.length ? filteredProducts : products}
				sorting={sorting}
				quantity={quantity}
				handleChangeSorting={handleChangeSorting}
				handleSelectGrid={handleSelectGrid}
				handleSelectList={handleSelectList}
			/>
		</>
	);
};

ProductsGrid.propTypes = {
	loadProducts: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	product: state.product,
	filteredProducts: state.product.filteredProducts,
});

const mapDispatchToProps = {
	loadProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductsGrid);
