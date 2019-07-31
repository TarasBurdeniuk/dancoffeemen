import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from './types';
import setAuthToken from '../utills/setAuthToken';

// Load user
export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/api/auth');

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Register user
export const register = ({ name, phone, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ name, phone, email, password });

	try {
		const res = await axios.post('/api/users', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		console.error(errors);

		dispatch({
			type: REGISTER_FAIL,
		});
	}
};

// Login user
export const login = (email, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/api/auth', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		console.error(errors);

		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// Logout
export const logout = () => dispatch => {
	delete axios.defaults.headers.common['x-auth-token'];
	dispatch({
		type: LOGOUT,
	});
};
