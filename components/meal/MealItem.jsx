import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
	Platform,
} from 'react-native';

const MealItem = ({ meal, handlePress }) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={handlePress}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealTitle }}>
						<ImageBackground
							source={{ uri: meal.item.imageUrl }}
							style={styles.BgImage}
						>
							<Text numberOfLines={1} style={styles.title}>
								{meal.item.title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text style={styles.content}>{meal.item.duration}m</Text>
						<Text style={styles.content}>
							{meal.item.complexity.toUpperCase()}
						</Text>
						<Text style={styles.content}>
							{meal.item.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		width: '100%',
		height: 200,
		backgroundColor: '#ccc',
		marginBottom: 30,
		borderRadius: 5,
		overflow: 'hidden',
	},
	title: {
		fontFamily: 'BoldItalic',
		fontSize: 22,
		color: '#fff',
		backgroundColor: 'rgba(0,0,0,.5)',
		paddingHorizontal: 5,
		paddingVertical: 10,
		textAlign: 'center',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealTitle: {
		height: '88%',
	},
	mealDetail: {
		paddingHorizontal: 15,
		justifyContent: 'space-between',
	},
	content: {
		fontFamily: 'Regular',
		marginTop: Platform.OS === 'android' ? 2 : 5,
	},
	BgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
});
