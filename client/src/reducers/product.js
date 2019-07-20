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
	GET_PRODUCT,
} from '../actions/types';

const initialState = {
	products: [],
	product: null,
	loading: false,
	error: null,
	brands: null,
	sizes: null,
	start: 0,
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
		case GET_PRODUCT:
			return { ...state, product: payload };
		case LOAD_PRODUCTS:
			return {
				...state,
				products: [...state.products.concat(payload)],
				loading: false,
				start: state.start + 1,
			};
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
				filteredProducts: [...state.filteredProducts.concat(...payload)],
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
