import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import { Colors } from '../constants/constants';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
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
		headerBottomBorder: 2,
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
		<Stack.Navigator mode='modal'>
			<Stack.Screen
				name='Favorite'
				options={{ title: 'Your Favorites', ...defaultProps }}
				component={FavoritesScreen}
			/>
		</Stack.Navigator>
	);
}
