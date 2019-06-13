import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends Component {
	state = {
		value: 1
	};

	increment = () => {
		this.setState({value: this.state.value + 1})
	};

	decrement = () => {
		if (this.state.value > 0) {
			this.setState({value: this.state.value - 1})
		}
	};

	render() {
		const { value } = this.state;

		return (
			<ProductDetails
				increment={this.increment}
				decrement={this.decrement}
				value={value}
			/>
		);
	}
}

export default ProductDetailsContainer;
