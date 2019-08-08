import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import { loadProducts, clearFilter } from '../../actions/products';
import PropTypes from 'prop-types';
import Spinner from '../Loading';

const ProductsGrid = ({ product: { products, filteredProducts }, clearFilter }) => {
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

	const handleClearFilter = () => {
		clearFilter();
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
				handleClearFilter={handleClearFilter}
			/>
		</>
	);
};

ProductsGrid.propTypes = {
	loadProducts: PropTypes.func.isRequired,
	clearFilter: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	product: state.product,
	filteredProducts: state.product.filteredProducts,
});

const mapDispatchToProps = {
	loadProducts,
	clearFilter,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductsGrid);
