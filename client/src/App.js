import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductGrid from './components/ProductGrid';

const App = () => {
	return (
		<Fragment>
			<NavLink to="/product-details">1. ProductDetails Component</NavLink>
			<br />
			<NavLink to="/product-grid">2. ProductGrid Component</NavLink>
			<hr />
			<div>
				<Route path="/product-details" component={ProductDetails} />
				<Route path="/product-grid" component={ProductGrid} />
			</div>
		</Fragment>
	);
};

export default App;
