import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryGridTile from '../components/category/CategoryGridTile';
import { useSelector } from 'react-redux';

const CategoriesScreen = ({ navigation }) => {
	const { category } = useSelector((state) => state);
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				handlerPress={() =>
					navigation.navigate('CategoryMeal', {
						categoryId: itemData.item.id,
						categoryTitle: itemData.item.title,
					})
				}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				keyExtractor={(item) => item.id}
				numColumns={2}
				data={category.categories}
				renderItem={renderGridItem}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: 15,
	},
});
