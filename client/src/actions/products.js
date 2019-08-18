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
	CLEAR_FILTER,
	GET_PRODUCT,
	GET_NEW_ARRIVALS,
	CLEAR_PRODUCT,
} from './types';

// Load products

export const loadProducts = (pageToStart = 0) => async dispatch => {
	dispatch({
		type: LOADING,
	});
	try {
		const res = await axios.get(`/api/products?start=${pageToStart}`);
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
	dispatch({
		type: LOADING,
	});

	try {
		const products = await axios.post('/api/filter', filteredObject, config);

		dispatch({
			type: LOAD_FILTERED_PRODUCTS,
			payload: products.data,
			filter: filteredObject,
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

// Load array all sizes

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

// Clear filter

export const clearFilter = () => dispatch => {
	dispatch({
		type: CLEAR_FILTER,
	});
};

// Get product by id

export const getProduct = id => async dispatch => {
	dispatch({
		type: CLEAR_PRODUCT,
	});
	try {
		const product = await axios.get(`/api/products/${id}`);
		dispatch({
			type: GET_PRODUCT,
			payload: product.data,
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

// Load new arrivals

export const loadNewArrivals = () => async dispatch => {
	try {
		const newArrivals = await axios.get('/api/products/newarrivals');
		dispatch({
			type: GET_NEW_ARRIVALS,
			payload: newArrivals.data,
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
