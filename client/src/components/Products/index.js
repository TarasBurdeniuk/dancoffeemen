import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import { clearFilter } from '../../actions/products';
import PropTypes from 'prop-types';

const ProductsGrid = ({ clearFilter }) => {
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
};

const mapDispatchToProps = {
	clearFilter,
};

export default connect(
	null,
	mapDispatchToProps,
)(ProductsGrid);
