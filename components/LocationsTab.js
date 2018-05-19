import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
	Image
} from 'react-native';

import generalStyles from '../styles/generalStyles';

const LocationsTab = () => (
	<View style={styles.container}>
		<Image 
			name="pic6"
			source={require('../assets/map.jpg')}
			style={styles.image}
		/>
		<Image 
			name="pin1"
			source={require('../assets/pin.png')}
			style={[styles.pin, styles.pin1]}
		/>
		<Image 
			name="pin2"
			source={require('../assets/pin.png')}
			style={[styles.pin, styles.pin2]}
		/>
		<Image 
			name="pin3"
			source={require('../assets/pin.png')}
			style={[styles.pin, styles.pin3]}
		/>
	</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: generalStyles.color.background,
    flex: 1
  },
  image: {

  },
  pin: {
  	position: 'absolute',
	width: 30,
  },
  pin1: {
  	top: 30,
  	left: 150
  },
  pin2: {
  	top: 260,
  	left: 10
  },
  pin3: {
  	top: 430,
  	left: 300
  }
});

export default LocationsTab;