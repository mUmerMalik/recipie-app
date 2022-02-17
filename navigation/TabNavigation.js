import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Navigation from '../navigation/Navigation';
import { Colors } from '../constants/constants';
import FavoriteNavigation from '../navigation/FavoriteNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: Colors.primaryColor,
			}}
			shifting={true}
			barStyle={{ backgroundColor: Colors.primaryColor }}
		>
			<Tab.Screen
				name='Meals'
				options={{
					tabBarIcon: (tabInfo) => (
						<Ionicons name='options-outline' size={24} color={tabInfo.color} />
					),
					tabBarColor: Colors.primaryColor,
				}}
				component={Navigation}
			/>
			<Tab.Screen
				name='Favorite'
				options={{
					tabBarLabel: 'Favorites!',
					tabBarIcon: (tabInfo) => (
						<FontAwesome name='star' size={24} color={tabInfo.color} />
					),
					tabBarColor: Colors.accentColor,
				}}
				component={FavoriteNavigation}
			/>
		</Tab.Navigator>
	);
}
