import { combineReducers } from 'redux';
import { mealReducer } from './meal/mealReducer';
import { categoryReducer } from './category/categoryReducer';

export const rootReducer = combineReducers({
	meal: mealReducer,
	category: categoryReducer,
});
