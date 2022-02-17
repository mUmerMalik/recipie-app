import { MEALS } from '../../data/demiData';
import * as Meal from './mealConstants';

const initialState = {
	isLoading: false,
	oldMeals: MEALS,
	meals: MEALS,
	favoriteMeals: [],
	filteredMeals: [],
};

export const mealReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case Meal.MEAL_SUCCESS:
			return {
				...state,
				isLoading: false,
				meals: MEALS,
			};
		case Meal.TOGGLE_FAVORITE:
			const isExist = state.favoriteMeals.findIndex(
				(meal) => meal.id === payload
			);
			if (isExist >= 0) {
				return {
					...state,
					isLoading: false,
					favoriteMeals: state.favoriteMeals.filter(
						(meal) => meal.id !== payload
					),
				};
			} else {
				return {
					...state,
					isLoading: false,
					favoriteMeals: [
						...state.favoriteMeals,
						...state.meals.filter((meal) => meal.id === payload),
					],
				};
			}
		case Meal.TOGGLE_FILTERS:
			const filteredMeals = state.oldMeals.filter((meal) => {
				if (payload.gluten && !meal.isGlutenFree) {
					return false;
				}
				if (payload.lactose && !meal.isLactoseFree) {
					return false;
				}
				if (payload.vegan && !meal.isVegan) {
					return false;
				}
				if (payload.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			return {
				...state,
				isLoading: false,
				meals: filteredMeals,
			};
		default:
			return state;
	}
};
