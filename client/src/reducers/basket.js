import {
	ADD_TO_BASKET,
	SET_BASKET,
	SET_SHIPPING_ADDRESS,
	LOGOUT,
	ORDER_LOAD,
} from '../actions/types';

const initialState = {
	products: JSON.parse(localStorage.getItem('shoppingCart')) || [],
	shippingAddress: {
		name: '',
		email: '',
		country: '',
		state: '',
		city: '',
		street: '',
		houseNumber: '',
		apartment: '',
		contactPhone: '',
		index: '',
		cardName: '',
		cardNumber: '',
		expDate: '',
		cvv: '',
	},
	order: null,
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
		case ORDER_LOAD:
			localStorage.setItem('shoppingCart', '[]');
			return {
				...state,
				products: [],
				order: payload,
			};
		case LOGOUT:
			return {
				...state,
				shippingAddress: {
					// ...state.shippingAddress,
					country: '',
					state: '',
					city: '',
					street: '',
					houseNumber: '',
					apartment: '',
					contactPhone: '',
					index: '',
					cardName: '',
					cardNumber: '',
					expDate: '',
					cvv: '',
				},
			};
		default:
			return state;
	}
};

export default basket;
