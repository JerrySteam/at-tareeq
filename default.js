import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Default extends Component{
  render(){
    return (
      <View style={styles.appContainer}>
        <Text>Index page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



<View style={{}}>
      <Text style={{fontFamily: 'normal', fontSize: 30}}>  normal </Text>
      <Text style={{fontFamily: 'notoserif', fontSize: 30}}>  notoserif </Text>
      <Text style={{fontFamily: 'sans-serif', fontSize: 30}}>  sans-serif </Text>
      <Text style={{fontFamily: 'sans-serif-light', fontSize: 30}}>  sans-serif-light </Text>
      <Text style={{fontFamily: 'sans-serif-thin', fontSize: 30}}>  sans-serif-thin </Text>
      <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 30}}>  sans-serif-condensed </Text>
      <Text style={{fontFamily: 'sans-serif-medium', fontSize: 30}}>  sans-serif-medium </Text>
      <Text style={{fontFamily: 'serif', fontSize: 30}}>  serif </Text>
      <Text style={{fontFamily: 'Roboto', fontSize: 30}}>  Roboto </Text>
      <Text style={{fontFamily: 'monospace', fontSize: 30}}>  monospace </Text>        
    </View>


import Icon from 'react-native-vector-icons/FontAwesome';



Navigation header size: wp('6%')


import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

//Import Custom Sidebar
import CustomSidebarMenu from './customsidebarmenu';

//import drawer option screens
import HomeScreens from './Home';
import SettingsScreens from './Settings';
import FavouritesScreens from './Favourites';
import SearchScreens from './Search';

//Stack Navigator for Options of Navigation Drawer
const HomeStackNavigator = HomeScreens;
const SettingsStackNavigator = SettingsScreens;
const FavouritesStackNavigator = FavouritesScreens;
const SearchStackNavigator = SearchScreens;

//Drawer Navigator for the Navigation Drawer / Sidebar
const MainDrawerNavigator = createDrawerNavigator({
  //Drawer Options and indexing
  HomeDrawer: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'HOME',
    },
  },
  LectureDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'LECTURES',
    },
  },
  FavouritesDrawer: {
    screen: FavouritesStackNavigator,
    navigationOptions: {
      drawerLabel: 'FAVOURITES',
    },
  },
  ManageLecturesDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'MANAGE LECTURES',
    },
  },
  SearchDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'SEARCH',
    },
  },
  DownloadsDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'DOWNLOADS',
    },
  },
  ResourcesDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'RESOURCES',
    },
  },
  SettingsDrawer: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'SETTINGS',
    },
  },
},
{
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  contentComponent: CustomSidebarMenu,
  //Sidebar width
  drawerWidth: Dimensions.get('window').width - 130,
});
export default MainDrawerNavigator;