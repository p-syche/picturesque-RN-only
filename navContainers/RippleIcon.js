
import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
   Animated,
  Easing
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

class RippleIcon extends React.Component {
	constructor() {  
		super();

		const maxOpacity = 0.08;

		this.state = {
		    maxOpacity,
		    scaleValue: new Animated.Value(0.01),
		    opacityValue: new Animated.Value(maxOpacity),
		};

		this.renderRippleView = this.renderRippleView.bind(this);
		this.onPressedIn = this.onPressedIn.bind(this);
		this.onPressedOut = this.onPressedOut.bind(this);

	}
	onPressedIn() {
	  Animated.timing(this.state.scaleValue, {
	      toValue: 1,
	      duration: 225,
	      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
	  }).start();
	}
	onPressedOut() {
		this.props.navigation.navigate(this.props.routeName)
		if(this.props.expanded === false){
			this.props.toggleMenu()
		}

		Animated.timing(this.state.opacityValue, {
			    toValue: 0,
			}).start(() => {
			    this.state.scaleValue.setValue(0.01);
			    this.state.opacityValue.setValue(this.state.maxOpacity);
			});
	}
	renderRippleView() {
		const size = 24;
		const { scaleValue, opacityValue } = this.state;

		const rippleSize = size * 2;
		return (
			<View style={{position: 'absolute'}}>
			    <Animated.View
			        style={{
			            width: rippleSize,
			            height: rippleSize,
			            borderRadius: rippleSize / 2,
			            transform: [{ scale: scaleValue }],
			            opacity: opacityValue,
			            backgroundColor: 'black',
			        }}
			    />
		    </View>
		);
	}
	render() {
		return(
			<TouchableWithoutFeedback
				onPressIn={this.onPressedIn} 
				onPressOut={this.onPressedOut}
			>
				<View style={styles.tab}>
					{this.renderRippleView()}
					<Icon 
		                name={this.props.iconName }
		                style={{ 
		                  color: generalStyles.color.light,
		                  fontSize: 24, 
		                }}
		              />
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
  tab: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: 'transparent',
  },
});

export default RippleIcon;