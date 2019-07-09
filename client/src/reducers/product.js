import { PRODUCT_ERROR, LOAD_PRODUCTS } from '../actions/types';

const initialState = {
	products: null,
	loading: true,
	error: null,
};

const product = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOAD_PRODUCTS:
			return { ...state, products: [...payload], loading: false };
		case PRODUCT_ERROR:
			return { ...state, error: payload, loading: false };
		default:
			return state;
	}
};

export default product;
