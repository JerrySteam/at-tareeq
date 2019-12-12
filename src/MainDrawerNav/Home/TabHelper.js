//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import {createAppContainer,} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
//Import all the screens for Tab
import RoutineScreen from './Routine/';
import SpecialScreen from './Special';
 
const TabScreen = createMaterialTopTabNavigator(
  {
    Routine: {
      screen: RoutineScreen,
      navigationOptions: {
          title: "Routine Ta'leem",
      }
    },
    Special: {
      screen: SpecialScreen,
      navigationOptions: {
          title: "Special Lectures",
      }
    }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      upperCaseLabel: false,
      style: {
        backgroundColor: '#4E9CDA',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: wp('4.5%'),
      },
      indicatorStyle: {
        borderBottomColor: '#052742',
        borderBottomWidth: 2,
      },
    },
  }
);
const TabHelper = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);