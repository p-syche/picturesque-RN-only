/*
This is where You set Your routes
If you change route screens DO NOT forget to alter *TabScreenContainer* accordingly
*/

import React from 'react';
import { TabNavigator } from 'react-navigation';

import generalStyles from '../styles/generalStyles';

import TabScreenContainer from './TabScreenContainer';
import CustomTabBar from './CustomTabBar';

const TabNavRoutes = TabNavigator({
  HomeTab: {
    screen: (props) => (<TabScreenContainer tag='HomeTab' screenProps={props.screenProps} />)
  },
  LocationsTab: {
    screen: (props) => (<TabScreenContainer tag='LocationsTab' screenProps={props.screenProps}/>)
  },
  PlusTab: {
    screen: (props) => (<TabScreenContainer tag='PlusTab' screenProps={props.screenProps}/>)
  },
  FavesTab: {
    screen: (props) => (<TabScreenContainer tag='FavesTab' screenProps={props.screenProps}/>)
  },
  ProfileTab: {
    screen: (props) => (<TabScreenContainer tag='ProfileTab' screenProps={props.screenProps}/>)
  },
}, {
  tabBarPosition: 'bottom',
  //tab bar animation seems to run smoother on Android
  //with animationEnabled set to TRUE
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: generalStyles.color.dark,
    style: {
      borderTopColor: 'transparent',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    }
  },
  tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
    <CustomTabBar 
      {...props}
      jumpToIndex={jumpToIndex}
      navigation={navigation}
    />
  ),
});


export default TabNavRoutes;
