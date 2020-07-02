import axios from 'axios';
import {
	ADD_TO_BASKET,
	PRODUCT_ERROR,
	SET_BASKET,
	SET_SHIPPING_ADDRESS,
	ORDER_ERROR,
	ORDER_LOAD,
} from './types';

// Add to basket product

export const addToBasket = product => dispatch => {
	let localCart = null;
	if (localStorage.shoppingCart) {
		localCart = JSON.parse(localStorage.shoppingCart);

		const newCart = localCart.filter(item => item._id === product._id);
		if (newCart.length) {
			localCart.forEach(item => {
				if (item._id === product._id) {
					item.addQuantity += product.addQuantity;
				}
			});
		} else {
			localCart.push(product);
		}

		localStorage.setItem('shoppingCart', JSON.stringify([...localCart]));
		localCart = JSON.parse(localStorage.shoppingCart);
	} else {
		localStorage.setItem('shoppingCart', JSON.stringify([product]));
		localCart = JSON.parse(localStorage.shoppingCart);
	}
	dispatch({
		type: ADD_TO_BASKET,
		payload: localCart,
	});
};

// Set quantity 0f product in basket

export const setQuantity = (prod, quantity) => dispatch => {
	const localCart = JSON.parse(localStorage.shoppingCart);

	localCart.map(item => {
		if (item._id === prod._id) {
			item.addQuantity = quantity;
		}
		return item;
	});
	localStorage.setItem('shoppingCart', JSON.stringify([...localCart]));

	dispatch({
		type: SET_BASKET,
		payload: localCart,
	});
};

// Remove product from basket

export const removeProduct = product => dispatch => {
	const localCart = JSON.parse(localStorage.shoppingCart).filter(
		item => item._id !== product._id,
	);

	localStorage.setItem('shoppingCart', JSON.stringify([...localCart]));

	dispatch({
		type: SET_BASKET,
		payload: localCart,
	});
};

// Load products from localStorage in data base

export const loadLocalStorageProducts = products => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	try {
		const res = await axios.post('/api/products', products, config);

		localStorage.setItem('shoppingCart', JSON.stringify([...res.data]));

		dispatch({
			type: ADD_TO_BASKET,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: {
				msg: err.message,
			},
		});
	}
};

// Set shipping address

export const setShippingAddress = form => dispatch => {
	dispatch({
		type: SET_SHIPPING_ADDRESS,
		payload: form,
	});
};

// Create order

export const createOrder = (form, products, totalPrice) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const orderProducts = products.filter(product => product.addQuantity > 0);
	const orderForm = {
		products: orderProducts,
		totalPrice,
		shipping: 'some shipping',
		deliveryAddress: { ...form },
		orderStatus: 'in progress',
	};
	try {
		const order = await axios.post('/api/order', orderForm, config);
		dispatch({
			type: ORDER_LOAD,
			payload: order.data,
		});
	} catch (err) {
		dispatch({
			type: ORDER_ERROR,
			payload: {
				msg: err.message,
			},
		});
	}
};
