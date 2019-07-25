import axios from 'axios';
import { ADD_TO_BASKET } from './types';

// Add to basket product

export const addToBasket = product => dispatch => {
	let localCart = null;
	if (localStorage.shoppingCart) {
		localCart = JSON.parse(localStorage.shoppingCart);

		const newCart = localCart.filter(item => item.id === product.id);
		if (newCart.length) {
			localCart.forEach(item => {
				if (item.id === product.id) {
					item.quantity += product.quantity;
				}
			});
		} else {
			localCart.push(product);
		}

		localStorage.setItem('shoppingCart', JSON.stringify([...localCart]));
	} else {
		localCart = localStorage.setItem('shoppingCart', JSON.stringify([product]));
	}
	dispatch({
		type: ADD_TO_BASKET,
		payload: localCart,
	});
};
