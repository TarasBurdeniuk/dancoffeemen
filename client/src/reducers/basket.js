import { ADD_TO_BASKET, SET_BASKET } from '../actions/types';

const initialState = {
	products: JSON.parse(localStorage.getItem('shoppingCart')) || [],
};

const basket = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_BASKET:
			return { ...state, products: payload };
		case SET_BASKET:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export default basket;
