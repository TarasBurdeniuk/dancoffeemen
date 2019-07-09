import axios from 'axios';
import { CONTACTS_LOADED, CONTACTS_ERROR } from './types';

// Load contacts
export const loadContacts = () => async dispatch => {
	try {
		const contacts = await axios.get('/api/admin/contacts');
		dispatch({
			type: CONTACTS_LOADED,
			payload: contacts.data,
		});
	} catch (err) {
		dispatch({
			type: CONTACTS_ERROR,
		});
	}
};
