import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawerStructure from '../navigationdrawerstructure'

import HomeScreen from './home';
import FeedbackScreen from './feedback';
import HelpCenterScreen from './helpcenter';
import PrivacyandLicensesScreen from './privacyandlicenses';
import EditProfileScreen from './editprofile';
import EditMajorProfileScreen  from './editmajorprofile';

const SettingsScreens = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  Feedback: {
    screen: FeedbackScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Send Feedback',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  HelpCenter: {
    screen: HelpCenterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Help Center',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff',
    }),
  },
  PrivacyandLicenses: {
    screen: PrivacyandLicensesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Privacy and Licenses',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff', 
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff', 
    }),
  },
  EditMajorProfile: {
    screen: EditMajorProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Major Profile',
      headerStyle: {
        backgroundColor: '#052742',
      },
      headerTintColor: '#fff', 
    }),
  },
});
export default SettingsScreens;