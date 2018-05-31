import React from 'react';
import { 
	StyleSheet, 
	ScrollView, 
	Image
} from 'react-native';

import generalStyles from '../styles/generalStyles';

const HomeTab = () => (
	<ScrollView style={styles.container}>
		<Image 
			name="pic2" 
			source={require('../assets/pic2.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic3" 
			source={require('../assets/pic3.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic4" 
			source={require('../assets/pic4.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic1" 
			source={require('../assets/pic1.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic5" 
			source={require('../assets/pic5.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic6" 
			source={require('../assets/pic6.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic7" 
			source={require('../assets/pic7.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic8" 
			source={require('../assets/pic8.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
		<Image 
			name="pic9" 
			source={require('../assets/pic9.jpg')}
			resizeMode="cover"
			style={styles.image}	
		/>
	</ScrollView>
)
	
const styles = StyleSheet.create({
	container: {
		backgroundColor: generalStyles.color.background,
		display: 'flex',
		flexDirection: 'column'
	},
	image: {
		height: 220,
		width: 'auto',
		marginBottom: 20,
	}
});


export default HomeTab;

