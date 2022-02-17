import { TOGGLE_FAVORITE, TOGGLE_FILTERS } from './mealConstants';

export const toggleFavorite = (id) => {
	return {
		type: TOGGLE_FAVORITE,
		payload: id,
	};
};

export const toggleFilters = (data) => {
	return {
		type: TOGGLE_FILTERS,
		payload: data,
	};
};
