import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';

import { Colors } from '../constants/constants';

const FilterSwitch = ({ title, state, stateHandler }) => (
	<View style={styles.filterDiv}>
		<Text style={styles.filterTitle}>{title}</Text>
		<Switch
			trackColor={{ false: '#ccc', true: Colors.primaryColor }}
			thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
			value={state}
			onValueChange={stateHandler}
		/>
	</View>
);

const FiltersScreen = ({ navigation }) => {
	const [filter, setFilters] = useState({
		gluten: false,
		lactose: false,
		vegan: false,
		vegetarian: false,
	});

	const getFilters = useCallback(() => {
		return filter;
	}, [filter]);

	useEffect(() => {
		navigation.setParams({ saveFilter: getFilters });
	}, [getFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				title='Gluten-free'
				state={filter.gluten}
				stateHandler={() => setFilters({ ...filter, gluten: !filter.gluten })}
			/>
			<FilterSwitch
				title='Lactose-free'
				state={filter.lactose}
				stateHandler={() => setFilters({ ...filter, lactose: !filter.lactose })}
			/>
			<FilterSwitch
				title='Vegan-free'
				state={filter.vegan}
				stateHandler={() => setFilters({ ...filter, vegan: !filter.vegan })}
			/>
			<FilterSwitch
				title='Vegetarian-free'
				state={filter.vegetarian}
				stateHandler={() =>
					setFilters({ ...filter, vegetarian: !filter.vegetarian })
				}
			/>
		</View>
	);
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: 15,
		alignItems: 'center',
	},
	title: {
		fontFamily: 'BoldItalic',
		textAlign: 'center',
		fontSize: 22,
		marginVertical: 20,
	},
	filterTitle: {
		fontFamily: 'Regular',
		fontSize: 16,
	},
	filterDiv: {
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
	},
});
