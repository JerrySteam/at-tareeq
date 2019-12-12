import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchBar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import NavigationDrawerStructure from '../navigationdrawerstructure'
import HomeScreen, {AppSearchBar} from './home';

const SearchScreens = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <AppSearchBar/>,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  }, 
});
export default SearchScreens;