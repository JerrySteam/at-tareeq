//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure, {HomeSearchButton} from '../navigationdrawerstructure'
 
import TabHelper from './TabHelper';
 
class HomeScreenTabHelper extends Component {
  //Return Tab Navigator from here to render tab in option one of navigation drawer
  render() {
    return <TabHelper />;
  }
}

const HomeScreens = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Home: {
    screen: HomeScreenTabHelper,
    navigationOptions: ({ navigation }) => ({
      //headerTitle: <HomeSearchButton/>,
      headerTitle: "Home",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />  ,
      headerStyle: {
        backgroundColor: '#052742',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#FFFFFF',
    }),
  },
});

export default HomeScreens;