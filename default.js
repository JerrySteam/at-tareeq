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
export default MainDrawerNavigator









<a href="https://imgbb.com/"><img src="https://i.ibb.co/TkPhHfw/bilal.jpg" alt="bilal" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/bbwYTy6/daurawa.jpg" alt="daurawa" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/HXRh6Pp/default.jpg" alt="default" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/3sK6kGc/gombe.jpg" alt="gombe" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/CpyPVVs/mufti.jpg" alt="mufti" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/B3PtkC3/pantami.jpg" alt="pantami" border="0"></a>


https://i.ibb.co/TkPhHfw/bilal.jpg|https://i.ibb.co/bbwYTy6/daurawa.jpg|https://i.ibb.co/3sK6kGc/gombe.jpg|https://i.ibb.co/CpyPVVs/mufti.jpg|https://i.ibb.co/B3PtkC3/pantami.jpg|https://i.ibb.co/HXRh6Pp/default.jpg

Bilal Philip|Malam Aminu Daurawa|Malam Kabir Gombe|Mufti Menk|Dr Isa Pantami

Principle of Al-Quran|Principle of Tafseer|The Do's and Don'ts of Marriage|Purification|Pearls of Grace and Wisdom|The true essence of Islam|Nature|The life hereafter|Love your neightbour|Jannah

02:00pm - 04:00pm|07:30pm - 08:30pm|05:00pm - 05:30pm|12:00pm - 01:20pm|04:00pm - 05:00pm|04:15pm - 05:30pm|06:15pm - 07:00pm|03:30pm - 05:00pm|02:30pm - 03:00pm|03:45pm - 05:45pm

Monday|Tuesday|Wednesday|Thursday|Friday|Saturday