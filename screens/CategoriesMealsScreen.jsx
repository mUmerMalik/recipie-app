import React from 'react';
import MealList from '../components/meal/MealList';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

const CategoriesMealsScreen = ({ route }) => {
	const { meal } = useSelector((state) => state);
	const { categoryId } = route.params;

	const selectedMeals = meal.meals.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return selectedMeals.length > 0 ? (
		<MealList data={selectedMeals} />
	) : (
		<View style={styles.screen}>
			<Text style={styles.title}>No meals found.</Text>
			<Text style={styles.title}>Maybe check your filters!</Text>
		</View>
	);
};

export default CategoriesMealsScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
	},
	title: {
		fontFamily: 'MediumItalic',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 2,
	},
});
