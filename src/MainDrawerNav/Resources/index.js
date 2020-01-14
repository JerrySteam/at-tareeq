import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../navigationdrawerstructure'

import HomeScreen from './home';

const ResourcesScreens = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Resources',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
});
export default ResourcesScreens;