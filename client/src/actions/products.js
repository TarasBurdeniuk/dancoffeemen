import axios from 'axios';
import { PRODUCT_ERROR, LOAD_PRODUCTS, BRANDS_ERROR, BRANDS_LOADED } from './types';

// Load products

export const loadProducts = () => async dispatch => {
	try {
		const res = await axios.get('/api/products');
		dispatch({
			type: LOAD_PRODUCTS,
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

// Load brands

export const loadBrands = () => async dispatch => {
	try {
		const brands = await axios.get('/api/brands');
		dispatch({
			type: BRANDS_LOADED,
			payload: brands.data,
		});
	} catch (err) {
		dispatch({
			type: BRANDS_ERROR,
			payload: {
				msg: err.message,
			},
		});
	}
};
