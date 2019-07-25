import { ADD_TO_BASKET } from '../actions/types';

const initialState = {
	products: [],
};

const basket = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_BASKET:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export default basket;
