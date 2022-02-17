import React from 'react';
import { Platform, TouchableOpacity, Alert } from 'react-native';
import { Entypo, Octicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import { Colors } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/meal/mealActions';

const Stack = createStackNavigator();

export default function Navigation() {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const defaultProps = {
		headerStyle: {
			backgroundColor:
				Platform.OS === 'android' ? Colors.primaryColor : 'transparent',
			borderBottomWidth: Platform.OS === 'android' ? 0 : 2,
			borderColor:
				Platform.OS === 'android' ? 'transparent' : Colors.primaryColor,
		},
		headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
		headerTitleStyle: {
			fontFamily: 'BoldItalic',
		},
		headerTitleAlign: 'center',
		headerLeft: () => (
			<TouchableOpacity
				style={{ paddingLeft: 10 }}
				onPress={() => navigation.toggleDrawer()}
			>
				<Octicons
					name='three-bars'
					size={24}
					color={Platform.OS === 'android' ? '#fff' : Colors.primaryColor}
				/>
			</TouchableOpacity>
		),
	};
	return (
		<Stack.Navigator mode='modal' initialRouteName='Meals'>
			<Stack.Screen
				name='Meals'
				options={{
					title: 'Meals Categories',
					...defaultProps,
				}}
				component={CategoriesScreen}
			/>
			<Stack.Screen
				name='CategoryMeal'
				options={({ route }) => ({
					title: route.params.categoryTitle,
					...defaultProps,
				})}
				component={CategoriesMealsScreen}
			/>
			<Stack.Screen
				name='MealDetail'
				options={({ route }) => ({
					title: route.params.mealTitle,
					...defaultProps,
					headerRight: () => (
						<TouchableOpacity
							style={{ paddingRight: 10 }}
							onPress={() => dispatch(toggleFavorite(route.params.mealId))}
						>
							<Entypo
								name={route.params.isFav ? 'star' : 'star-outlined'}
								size={24}
								color={Platform.OS === 'android' ? '#fff' : Colors.primaryColor}
							/>
						</TouchableOpacity>
					),
				})}
				component={MealsDetailsScreen}
			/>
		</Stack.Navigator>
	);
}
