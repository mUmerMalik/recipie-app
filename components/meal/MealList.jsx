import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

const MealList = ({ data }) => {
	const navigation = useNavigation();

	const renderMealItem = (meal) => {
		return (
			<MealItem
				meal={meal}
				handlePress={() => {
					navigation.navigate('MealDetail', {
						mealId: meal.item.id,
						mealTitle: meal.item.title,
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				data={data}
				style={{ width: '100%' }}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealList;

const styles = StyleSheet.create({
	list: {
		flex: 1,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
