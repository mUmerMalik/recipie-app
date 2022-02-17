import { CATEGORIES } from '../../data/demiData';

const initialState = {
	isLoading: false,
	categories: CATEGORIES,
};

export const categoryReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'Check':
			return state;
		default:
			return state;
	}
};
