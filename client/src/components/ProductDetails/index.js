import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

class ProductDetailsContainer extends Component {
	state = {
		value: 1,
		size: ''
	};

	increment = () => {
		this.setState({value: this.state.value + 1})
	};

	decrement = () => {
		if (this.state.value > 1) {
			this.setState({value: this.state.value - 1})
		}
	};

	handleChangeSize = (event) => {
		const { value } = event.target;
		this.setState({size: value})
	};

	render() {
		const { value, size } = this.state;

		console.log(this.state);

		return (
			<ProductDetails
				increment={this.increment}
				decrement={this.decrement}
				handleChangeSize={this.handleChangeSize}
				value={value}
				size={size}
			/>
		);
	}
}

export default ProductDetailsContainer;
