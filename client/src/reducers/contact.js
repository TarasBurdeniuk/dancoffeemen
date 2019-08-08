import { CONTACTS_ERROR, CONTACTS_LOADED } from '../actions/types';

const initialState = {
	loading: true,
	error: null,
	contacts: null,
};

const contact = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CONTACTS_LOADED:
			return { ...state, contacts: { ...payload[0] }, loading: false };
		case CONTACTS_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default contact;
