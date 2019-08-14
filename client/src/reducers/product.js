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
	GET_NEW_ARRIVALS,
} from '../actions/types';

const initialState = {
	products: [],
	product: null,
	loading: false,
	error: null,
	brands: null,
	sizes: null,
	startPage: 0,
	quantityAllProducts: 0,
	quantityChosenFilter: 0,
	filteredProducts: [],
	newArrivals: null,
	chosenFilter: {
		brands: [],
		price: [5, 40],
		size: [],
		startPage: 0,
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
				products: [...state.products.concat(payload.products)],
				loading: false,
				startPage: state.startPage + 1,
				quantityAllProducts: payload.quantity,
			};
		case BRANDS_LOADED:
			return { ...state, brands: payload };
		case SIZES_LOADED:
			return { ...state, sizes: payload[0].size };
		case GET_NEW_ARRIVALS:
			return { ...state, newArrivals: payload };
		case CLEAR_FILTER:
			return {
				...state,
				chosenFilter: { brands: [], price: [5, 40], size: [], startPage: 0 },
				filteredProducts: [],
				quantityChosenFilter: 0,
			};
		case LOAD_FILTERED_PRODUCTS:
			let prod = [];
			if (filter.startPage > 0) {
				prod = [...state.filteredProducts.concat(...payload.products)];
			} else {
				prod = [...payload.products];
			}
			return {
				...state,
				filteredProducts: prod,
				chosenFilter: {
					...filter,
					startPage: filter.startPage + 1,
				},
				quantityChosenFilter: payload.quantity,
				loading: false,
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
