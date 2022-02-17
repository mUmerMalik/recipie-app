import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ title, handlerPress, color }) => {
	let TouchableCom = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCom = TouchableNativeFeedback;
	}
	return (
		<View style={styles.gridItem}>
			<TouchableCom style={{ flex: 1 }} onPress={handlerPress}>
				<View style={{ ...styles.container, ...{ backgroundColor: color } }}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</TouchableCom>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 15,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 2, height: 0 },
		elevation: 3,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	title: {
		fontFamily: 'BoldItalic',
		fontSize: 20,
		textAlign: 'right',
		color: '#0e0e0e',
	},
});
