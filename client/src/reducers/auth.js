import {
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	EDIT_ADDRESS,
	LOAD_USER_ORDERS,
	GET_ORDER_BY_ID,
	CLEAR_ORDER,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	userOrders: [],
	order: null,
	user: null,
};

const auth = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case EDIT_ADDRESS:
			return {
				...state,
				user: payload,
			};
		case LOAD_USER_ORDERS:
			return {
				...state,
				userOrders: payload,
			};
		case GET_ORDER_BY_ID:
			return {
				...state,
				order: payload,
			};
		case CLEAR_ORDER:
			return { ...state, order: null };
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				userOrders: [],
				user: null,
			};
		default:
			return state;
	}
};

export default auth;
