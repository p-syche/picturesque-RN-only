/*
* App root file.
* stores app state in order to pass it correctly to Tab Views and Tab Bar
*/

import React from 'react';
import { Dimensions, Platform, Animated, Easing } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

import TabNavRoutes from './navContainers/TabNavRoutes';
import generalStyles from './styles/generalStyles';

import { 
  animSettings, 
  animateAll,
  toggleStarter,
  toggleFinal
} from './animContainers';

let width = Dimensions.get('window').width;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      initialValues,
      expanded: true,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.updateToggleState = this.updateToggleState.bind(this);

    Dimensions.addEventListener('change', this.updateToggleState);

  }


  //prepare values dependant on width after orientation change
  updateToggleState() {
    let currentWidth = Dimensions.get('window').width,
        saveValues = {...this.state.initialValues};

    width = currentWidth;
    saveValues.unfoldMenu = new Animated.Value(width);

    if (this.state.expanded === false) {
      this.setState({
        initialValues: saveValues
      });
    }
  }

  //toggle animation values WITH updated width of device
  toggleMenu() {
    let currentWidth = Dimensions.get('window').width;
    width = currentWidth;

    this.setState({
        expanded : !this.state.expanded
    });

    let toggledState = toggleStarter(this.state.expanded, this.state.initialValues, width),
        toggledFinal = toggleFinal(this.state.expanded, width);

    animateAll(toggledState, toggledFinal);


  }

  render() {
    return (
      <AppRootNav 
      screenProps={{
        animSettings: this.state.initialValues,
        expanded: this.state.expanded,
        toggleMenu: this.toggleMenu,
      }}/>
    );
  }
}

const AppRootNav = StackNavigator({
  TabNavRoutes: {
    screen: TabNavRoutes,
    navigationOptions: {
      headerTitle: 'Picturesque',
      headerMode: 'screen',
      headerTitleStyle: {
        color: generalStyles.color.title,
        fontSize: 23,
        fontWeight: 'bold'
      }
    },
  }
});
