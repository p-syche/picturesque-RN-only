import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Animated,
  Easing
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

class PlusTouch extends React.Component {
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
    this.props.toggleMenu();
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
        <View style={{position: 'absolute'}} >
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
    return (
        <TouchableWithoutFeedback 
          onPressIn={this.onPressedIn} 
          onPressOut={this.onPressedOut}
          style={styles.toucheable}>
            <View style={styles.container}>
              {this.renderRippleView()}
              <View style={[,
                {
                  backgroundColor: generalStyles.color.plus,
                  height: 2,
                  width: 24,
                  padding: 0,
                  top: 0
                }
              ]}></View>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  toucheable: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default PlusTouch;