import { GET_PHOTO } from '../actions/typesCaruselPhoto';

const initialState = {
	caruselImages: null,
	brandImages: null,
};

const caruselPhoto = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_PHOTO:
			return { caruselImages: payload[0].caruselImages, brandImages: payload[0].brandImages };
		default:
			return state;
	}
};

export default caruselPhoto;
