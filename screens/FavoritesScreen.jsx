import React from 'react';
import MealList from '../components/meal/MealList';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
	const { meal } = useSelector((state) => state);

	return meal?.favoriteMeals.length > 0 ? (
		<MealList data={meal.favoriteMeals} />
	) : (
		<View style={styles.screen}>
			<Text style={styles.title}>No favorite meals found.</Text>
			<Text style={styles.title}>Please add some!</Text>
		</View>
	);
};

export default FavoritesScreen;

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
