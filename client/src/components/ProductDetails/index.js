import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends Component {
	state = {
		quantity: 1,
		size: '',
		availability: true
	};

	increment = () => {
		this.setState({quantity: this.state.quantity + 1})
	};

	decrement = () => {
		if (this.state.quantity > 1) {
			this.setState({quantity: this.state.quantity - 1})
		}
	};

	handleChangeSize = (event) => {
		const { value } = event.target;
		this.setState({size: value})
	};

	render() {
		const { quantity, size, availability } = this.state;

		console.log(this.state);

		return (
			<ProductDetails
				increment={this.increment}
				decrement={this.decrement}
				handleChangeSize={this.handleChangeSize}
				quantity={quantity}
				size={size}
				availability={availability}
			/>
		);
	}
}

export default ProductDetailsContainer;
