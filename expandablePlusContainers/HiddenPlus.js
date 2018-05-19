import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Platform
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import UnfoldMenu from '../components/UnfoldMenu';

let { width, height } = Dimensions.get('window');

class HiddenPlus extends React.Component {
  constructor() {
    super();
  }

  componentWillUpdate() {
    let currentWidth = Dimensions.get('window').width;
    width = currentWidth;
  }

	render() {
		const {
      scalePlus,
      unfoldMenu,
      unfoldMenuMove,
      unfoldOpacity,
    } = this.props.animSettings;

		return (
        <View style={[
            styles.plusMenuContainer,
            { 
              width: width,
             }
        ]}>

          <Animated.View style={[styles.fakeBorder,
              {
                backgroundColor: generalStyles.color.plus,
                height: scalePlus,
                width: 2,
                padding: 0,
                top: 16,
              }
          ]}></Animated.View>
          
          <Animated.View 
            style={{
              position: 'absolute',
              top: 4,
              left: unfoldMenuMove,
              width: unfoldMenu,
              height: 56,
              backgroundColor: generalStyles.color.dark
            }}
          >
             <UnfoldMenu 
              unfoldOpacity={unfoldOpacity} 
            />
          </Animated.View>
            
      
        </View>
			
		)
	}
}


const styles = StyleSheet.create({
  plusMenuContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left:0,
    height: 56,
    width: 56,
    alignItems: 'center',
  },
  verticalPlus: {
    backgroundColor: 'transparent',
    color: generalStyles.color.dark,
    fontSize: 24,
  }
});


export default HiddenPlus;