import { PRODUCT_ERROR, LOAD_PRODUCTS, BRANDS_LOADED, BRANDS_ERROR } from '../actions/types';

const initialState = {
	products: null,
	loading: true,
	error: null,
	brands: null,
};

const product = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOAD_PRODUCTS:
			return { ...state, products: [...payload], loading: false };
		case PRODUCT_ERROR:
		case BRANDS_ERROR:
			return { ...state, error: payload, loading: false };
		case BRANDS_LOADED:
			return { ...state, brands: payload };
		default:
			return state;
	}
};

export default product;
