import {
	PRODUCT_ERROR,
	LOAD_PRODUCTS,
	BRANDS_LOADED,
	BRANDS_ERROR,
	LOAD_FILTERED_PRODUCTS,
	LOADING,
	SIZES_ERROR,
	SIZES_LOADED,
	CLEAR_FILTER,
} from '../actions/types';

const initialState = {
	products: null,
	loading: false,
	error: null,
	brands: null,
	sizes: null,
	filteredProducts: [],
	chosenFilter: {
		brands: [],
		price: [],
		size: [],
	},
};

const product = (state = initialState, action) => {
	const { type, payload, filter } = action;
	switch (type) {
		case LOADING:
			return { ...state, loading: true };
		case LOAD_PRODUCTS:
			return { ...state, products: payload, loading: false };
		case BRANDS_LOADED:
			return { ...state, brands: payload };
		case SIZES_LOADED:
			return { ...state, sizes: payload[0].size };
		case CLEAR_FILTER:
			return {
				...state,
				chosenFilter: { brands: [], price: [], size: [] },
				filteredProducts: [],
			};
		case LOAD_FILTERED_PRODUCTS:
			return {
				...state,
				filteredProducts: [...payload],
				chosenFilter: { ...filter },
			};
		case PRODUCT_ERROR:
		case BRANDS_ERROR:
		case SIZES_ERROR:
			return { ...state, error: payload, loading: false };
		default:
			return state;
	}
};

export default product;
