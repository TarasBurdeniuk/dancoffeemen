import { ADD_TO_BASKET, SET_BASKET, SET_SHIPPING_ADDRESS } from '../actions/types';

const initialState = {
	products: JSON.parse(localStorage.getItem('shoppingCart')) || [],
	shippingAddress: {
		name: '',
		email: '',
		country: '',
		state: '',
		city: '',
		street: '',
		homeNumber: '',
		apartments: '',
		contactPhone: '',
		index: '',
		cardName: '',
		cardNumber: '',
		expDate: '',
		cvv: '',
	},
};

const basket = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_BASKET:
			return { ...state, products: payload };
		case SET_BASKET:
			return { ...state, products: payload };
		case SET_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: { ...state.shippingAddress, ...payload },
			};
		default:
			return state;
	}
};

export default basket;
