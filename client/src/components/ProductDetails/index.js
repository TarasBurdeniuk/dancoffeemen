import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Details from './Details';
import { getProduct } from '../../actions/products';
import Spinner from '../Loading';

const ProductDetailsContainer = ({ match, getProduct, product }) => {
	useEffect(() => {
		getProduct(match.params.id);
	}, [match.params.id, getProduct]);

	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		if (!product.status || quantity >= product.quantity) {
			return;
		}
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (!product.status) {
			return;
		}
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return product === null ? (
		<Spinner />
	) : (
		<Details
			quantity={quantity}
			product={product}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
		/>
	);
};

const mapStateToProps = state => ({
	product: state.product.product,
});

const mapDispatchToProps = {
	getProduct,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductDetailsContainer);
