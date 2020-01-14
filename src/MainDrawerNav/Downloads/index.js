import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../navigationdrawerstructure'

import HomeScreen from './home';

const DownloadsScreens = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Downloads',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
});
export default DownloadsScreens;