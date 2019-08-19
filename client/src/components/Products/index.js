import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import { clearFilter, loadProducts } from '../../actions/products';
import PropTypes from 'prop-types';

const ProductsGrid = ({ clearFilter, loadProducts, products }) => {
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
		if (!products.length) {
			loadProducts();
		}
	};

	return (
		<>
			<Container
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
	clearFilter: PropTypes.func.isRequired,
	loadProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	products: state.product.products,
});

const mapDispatchToProps = {
	clearFilter,
	loadProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductsGrid);
