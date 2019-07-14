import axios from 'axios';
import {
	PRODUCT_ERROR,
	LOAD_PRODUCTS,
	BRANDS_ERROR,
	BRANDS_LOADED,
	LOAD_FILTERED_PRODUCTS,
	LOADING,
	SIZES_ERROR,
	SIZES_LOADED,
} from './types';

// Load products

export const loadProducts = () => async dispatch => {
	dispatch({
		type: LOADING,
	});
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

// Load checked product by filter

export const loadFilteredProducts = filteredObject => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	try {
		const products = await axios.post('/api/filter', filteredObject, config);

		dispatch({
			type: LOAD_FILTERED_PRODUCTS,
			payload: products.data,
			filter: filteredObject,
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

export const loadSizes = () => async dispatch => {
	try {
		const sizes = await axios.get('/api/size');

		dispatch({
			type: SIZES_LOADED,
			payload: sizes.data,
		});
	} catch (err) {
		dispatch({
			type: SIZES_ERROR,
			payload: {
				msg: err.message,
			},
		});
	}
};
