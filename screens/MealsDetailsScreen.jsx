import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const MealsDetailsScreen = ({ route, navigation }) => {
	const { meal } = useSelector((state) => state);
	const { mealId } = route.params;
	const selectedMeal = meal.meals.find((meal) => meal.id === mealId);
	const currentFav = meal.favoriteMeals.some((meal) => meal.id === mealId);

	useEffect(() => {
		navigation.setParams({
			isFav: currentFav,
		});
	}, [currentFav]);

	return (
		<ScrollView style={styles.screen}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text styles={styles.content}>{selectedMeal.duration}m</Text>
				<Text styles={styles.content}>
					{selectedMeal.complexity.toUpperCase()}
				</Text>
				<Text styles={styles.content}>
					{selectedMeal.affordability.toUpperCase()}
				</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients &&
				selectedMeal.ingredients.map((ingredient, ind) => (
					<Text style={{ ...styles.content, ...styles.descText }} key={ind}>
						{ingredient}
					</Text>
				))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps &&
				selectedMeal.steps.map((step, ind) => (
					<Text style={{ ...styles.content, ...styles.descText }} key={ind}>
						{step}
					</Text>
				))}
		</ScrollView>
	);
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
	screen: { flex: 1, paddingBottom: 20 },
	details: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-around',
	},
	image: { width: '100%', height: 200 },
	title: {
		fontFamily: 'BoldItalic',
		textAlign: 'center',
		marginVertical: 15,
		fontSize: 20,
	},
	content: { fontFamily: 'Regular' },
	descText: {
		marginVertical: 3,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
	},
});
