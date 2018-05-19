/*
This CustomTabBar:
 - makes sure the middle tab doesn't navigate to a new screen
 - takes care of closing the HiddenMenu when tabs are changed
 - this is where You set icons for Your tabs
*/

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Platform,
  Animated,
  Easing
} from 'react-native';

import generalStyles from '../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

let { width, height } = Dimensions.get('window');

import HiddenPlus from '../expandablePlusContainers/HiddenPlus';
import PlusTouch from '../expandablePlusContainers/PlusTouch';
import RippleIcon from './RippleIcon';

class CustomTabBar extends React.Component {
  icons = {
    HomeTab: 'ios-home',
    LocationsTab: 'ios-pin',
    FavesTab: 'ios-heart',
    ProfileTab: 'ios-person'
  };

  constructor() {
    super();
  }

  componentWillUpdate() {
    let currentWidth = Dimensions.get('window').width;
    width = currentWidth;
  }

  render() {
    const navigation = this.props.navigation;
    const { routes } = navigation.state;
    let iconWeight = '-outline';

    const {
      expanded,
      toggleMenu,
      animSettings,
    } = this.props.screenProps;

    const iconTypes = this.icons;


    const content = routes.map(route => {
        
      let iconClass = '';
      let iconActive = false;

      if(navigation.state.index === routes.indexOf(route) &&
        iconTypes[route.routeName].slice(0,4) === 'ios-') {
        iconActive = true;
      } else if (navigation.state.index === routes.indexOf(route) &&
        iconTypes[route.routeName].slice(0,4) !== 'ios-') {
        iconActive = true
      } else if (navigation.state.index !== routes.indexOf(route) && 
        typeof iconTypes[route.routeName] !== 'undefined' ) {
          if (iconTypes[route.routeName].slice(0,4) === 'ios-' ) {
            iconClass = '-outline';
            iconActive = false;
          }
      }
      

      if(route.routeName !== 'PlusTab') {
        return (
          <RippleIcon 
            key={route.routeName}
            navigation={navigation}
            routeName={route.routeName}
            iconName={this.icons[route.routeName]+iconClass}
            expanded={expanded}
            toggleMenu={toggleMenu}
            activeClass={iconActive}
          />
        )
      } else {
        return (
          <PlusTouch 
            key={route.routeName} 
            toggleMenu={toggleMenu}
          />
        )
      }
    })

    return (
      <Animated.View 
        style={[styles.tabContainer,
            {
              width: width,
              paddingTop: animSettings.expandTabBar,
            }
          ]}>
          <HiddenPlus animSettings={animSettings} />
        <View 
          style={[styles.tabInner,
              {width: width}
            ]}
          >
          
          {content}
        
        </View>
      </Animated.View>
      
    )
  }
}


const styles = StyleSheet.create({
  tabContainer: {
    height: ((Platform.OS === 'ios' && height === 812) ? 66 : 56),
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    left:0,
    backgroundColor: generalStyles.color.background,
  },
  tabInner: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: ((Platform.OS === 'ios' && height === 812) ? 10 : 0),
    backgroundColor: 'transparent'
  }
});

export default CustomTabBar;
