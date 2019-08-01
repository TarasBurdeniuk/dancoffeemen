import { combineReducers } from 'redux';
import auth from './auth';
import product from './product';
import contact from './contact';
import basket from './basket';

export const rootReducer = combineReducers({
	auth,
	product,
	contact,
	basket,
});
