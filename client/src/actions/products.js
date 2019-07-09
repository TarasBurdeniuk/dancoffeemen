import axios from 'axios';
import { PRODUCT_ERROR, LOAD_PRODUCTS } from './types';

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
				msg: err.response.statusText,
				status: err.response.status,
			},
		});
	}
};
