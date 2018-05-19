import React from 'react';
import { 
	Text, 
	View,
	StyleSheet,
	ScrollView,
	Image
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const FavesTab = () => (
	<ScrollView>
		<View style={styles.container}>
			<Text style={[styles.text, styles.header]}>My Favourites</Text>
			<Image 
				name="pic5"
				source={require('../assets/pic5.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View style={styles.iconText}>
				<Icon 
		            name='ios-heart'
		            style={styles.heart}
		        />
				<Text style={styles.text}>By 198 members</Text>
			</View>

			<Image 
				name="pic7"
				source={require('../assets/pic7.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View style={styles.iconText}>
				<Icon 
		            name='ios-heart'
		            style={styles.heart}
		        />
				<Text style={styles.text}>By 23 members</Text>
			</View>

			<Image 
				name="pic5"
				source={require('../assets/pic5.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View style={styles.iconText}>
				<Icon 
		            name='ios-heart'
		            style={styles.heart}
		        />
				<Text style={styles.text}>By 198 members</Text>
			</View>

			<Image 
				name="pic9"
				source={require('../assets/pic9.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View style={styles.iconText}>
				<Icon 
		            name='ios-heart'
		            style={styles.heart}
		        />
				<Text style={styles.text}>By 765 members</Text>
			</View>

			<Image 
				name="pic2"
				source={require('../assets/pic2.jpg')}
				resizeMode='cover'
				style={styles.image}
			/>
			<View style={styles.iconText}>
				<Icon 
		            name='ios-heart'
		            style={styles.heart}
		        />
				<Text style={styles.text}>By 15 members</Text>
			</View>
			
		</View>
	</ScrollView>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: generalStyles.color.background,
		paddingTop: 40
	},
	header: {
		paddingBottom: 20,
		paddingLeft: 20,
		fontWeight: 'bold',
		fontSize: 24,
		color: generalStyles.color.title,
	},
	text: {
		color: generalStyles.color.text,
	},
	image: {
		height: 200,
		width: 'auto',
		marginBottom: 10,
		display: 'flex'
	},
	iconText: {
		flexDirection: 'row',
		marginBottom: 20
	},
	heart: {
		fontSize: 20, 
		color: '#bd2131',
		paddingRight: 5,
		paddingLeft: 20,
		marginTop: -2
	}
});

export default FavesTab