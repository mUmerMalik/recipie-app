import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import TabNavigation from './navigation/TabNavigation';
import FilterNavigation from './navigation/FilterNavigation';
import store from './redux';
import { StyleSheet, View, Image } from 'react-native';

const Drawer = createDrawerNavigator();

const fontsFetch = () =>
	Font.loadAsync({
		Regular: require('./assets/fonts/Raleway-Regular.ttf'),
		Medium: require('./assets/fonts/Raleway-Medium.ttf'),
		MediumItalic: require('./assets/fonts/Raleway-MediumItalic.ttf'),
		Bold: require('./assets/fonts/Raleway-Bold.ttf'),
		BoldItalic: require('./assets/fonts/Raleway-BoldItalic.ttf'),
	});

export default function App() {
	const [loadingGif, setLoadingGif] = useState(true);
	const [fetchedFont, setFetchedFont] = useState(false);

	if (!fetchedFont) {
		return (
			<AppLoading
				startAsync={fontsFetch}
				onFinish={() => setFetchedFont(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	if (loadingGif) {
		setTimeout(() => {
			setLoadingGif(false);
		}, 4000);
		return (
			<View style={styles.screenLoading}>
				<Image
					style={styles.Loader}
					resizeMode='contain'
					source={require('./assets/Loading.gif')}
				/>
			</View>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Drawer.Navigator
					drawerContentOptions={{
						activeTintColor: 'white',
						labelStyle: {
							fontFamily: 'MediumItalic',
							fontSize: 16,
							color: 'rgba(255, 255, 255, 0.7)',
						},
					}}
					drawerStyle={{
						backgroundColor: '#742eca',
					}}
				>
					<Drawer.Screen name='Meals' component={TabNavigation} />
					<Drawer.Screen name='Filter' component={FilterNavigation} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	screenLoading: {
		flex: 1,
		backgroundColor: '#183a9e',
	},
	Loader: {
		width: '100%',
		height: '100%',
		zIndex: 10,
	},
});
