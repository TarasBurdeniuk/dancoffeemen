import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import ContactUs from './components/ContacUs';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import './styles/index.css';
import setAuthToken from './utills/setAuthToken';
import store from './store';
import { loadUser } from './actions/auth';
import { loadContacts } from './actions/contacts';
import { loadBrands, loadSizes, loadProducts } from './actions/products';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
		store.dispatch(loadContacts());
		store.dispatch(loadBrands());
		store.dispatch(loadSizes());
		store.dispatch(loadProducts());
	}, []);

	return (
		<Router>
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/contact-us" component={ContactUs} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<Route exact path="/:id" component={ProductDetails} />
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default App;
