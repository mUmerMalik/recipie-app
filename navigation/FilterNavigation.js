import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../constants/constants';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FiltersScreen from '../screens/FiltersScreen';
import { useDispatch } from 'react-redux';
import { toggleFilters } from '../redux/meal/mealActions';

const Stack = createStackNavigator();

export default function FilterNavigation() {
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
				name='Filter'
				options={({ route }) => ({
					title: 'FIlters Screen',
					...defaultProps,
					headerRight: () => (
						<TouchableOpacity
							style={{ paddingRight: 10 }}
							onPress={() => dispatch(toggleFilters(route.params.saveFilter()))}
						>
							<FontAwesome
								name='save'
								size={24}
								color={Platform.OS === 'android' ? '#fff' : Colors.primaryColor}
							/>
						</TouchableOpacity>
					),
				})}
				component={FiltersScreen}
			/>
		</Stack.Navigator>
	);
}
