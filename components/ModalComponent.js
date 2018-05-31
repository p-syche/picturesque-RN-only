import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import generalStyles from '../styles/generalStyles';

changedOrientation = () =>
	alert("whoa!")

class ModalComponent extends React.Component {
	render() {
		return (
			<Modal
	          animationType="slide"
	          transparent={false}
	          visible={this.props.modalVisible}
	          supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
	          >
	          <View style={styles.container}>
				<TouchableWithoutFeedback
					onPress={e => 
					  this.props.closeModal()
					}>
					<Text style={styles.hideModal}> &lt; Go Back</Text>
				</TouchableWithoutFeedback>
				<Image 
					name="pic10" 
					source={require('../assets/pic10.jpg')}
					resizeMode="cover"
					style={styles.image}	
				/>
				<View>
					<Text style={styles.mainText}>Hello!</Text>
					<Text style={styles.paragraph}>This is an example of a nice modal for all Your interesting stuff!</Text>
				</View>
              	<TouchableWithoutFeedback
					onPress={e => 
					  this.props.closeModal()
					}>
					<Text style={styles.hideModalBottom}> &lt; Go Back</Text>
				</TouchableWithoutFeedback>
	          </View>
	        </Modal>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingTop: 130
	},
	hideModal: {
		position: 'absolute',
		top: 60,
		right: 30,
		color: generalStyles.color.text,
		zIndex: 9999,
		backgroundColor: 'transparent'
	},
	hideModalBottom: {
		color: generalStyles.color.text,
		textAlign: 'right',
		paddingRight: 30,
		paddingTop: 100
	},
	mainText: {
		fontSize: 32,
		marginTop: 100,
		backgroundColor: 'transparent',
		display: 'flex',
		textAlign: 'center',
		color: generalStyles.color.text
	},
	paragraph: {
		fontSize: 16,
		color: generalStyles.color.text,
		textAlign: 'center',
		padding: 40
	},
	image: {
		height: 200,
		position: 'absolute',
		top: 0,
		left: 0
	}
})

export default ModalComponent;