import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends Component {
	state = {
		quantity: 1,
		size: '',
		availability: true,
		starsRate: 3
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

	handleChangeRate = (num) => {
		this.setState({
			starsRate: num
		});
	};

	render() {
		const { quantity, size, availability, starsRate } = this.state;

		console.log(this.state);

		return (
			<ProductDetails
				quantity={quantity}
				size={size}
				availability={availability}
				starsRate={starsRate}
				increment={this.increment}
				decrement={this.decrement}
				handleChangeSize={this.handleChangeSize}
				handleChangeRate={this.handleChangeRate}
			/>
		);
	}
}

export default ProductDetailsContainer;
