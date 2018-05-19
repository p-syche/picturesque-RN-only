import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalComponent from './ModalComponent';

import generalStyles from '../styles/generalStyles';

class UnfoldMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			modalVisible: false
		};

		this.closeModal = this.closeModal.bind(this);
	}
	handleClick(item) {
		alert('Thanks for clicking the '+item+' icon!')
	}
	openModal() {
		this.setState({modalVisible: true});
	}
	closeModal() {
		this.setState({modalVisible: false});
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback
					onPressOut={e => this.handleClick('search')}>
				  	<Animated.Text style={[
				  		styles.iconWrap,
						{ opacity: this.props.unfoldOpacity }
				  		]}
					>
						<Icon 
						  name='ios-search-outline'
						  style={styles.icon}
						/>
					</Animated.Text>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback
					onPressOut={e => this.openModal()}>
					<Animated.Text  style={[
				  		styles.iconWrap,
						{ opacity: this.props.unfoldOpacity }
				  		]}
					>
						<Icon 
						  name='ios-apps'
						  style={styles.icon}
						/>
					</Animated.Text>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback
					onPressOut={e => this.handleClick('play')}>
					<Animated.Text  style={[
				  		styles.iconWrap,
						{ opacity: this.props.unfoldOpacity }
				  		]}
					>
						<Icon 
						  name='ios-play-outline'
						  style={styles.icon}
						/>
					</Animated.Text>
				</TouchableWithoutFeedback>

				<ModalComponent
					modalVisible={this.state.modalVisible}
					closeModal={this.closeModal}
				/>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 56,
		paddingTop: 9,
	},
	iconWrap: {
		paddingTop: 3,
		width: 37,
		height: 35,
		textAlign: 'center',
		backgroundColor: generalStyles.color.background,
		fontWeight: 'bold',
	},
	icon: { 
		flexDirection: 'row',
		fontSize: 30, 
		color: generalStyles.color.dark,
	}
})

export default UnfoldMenu;