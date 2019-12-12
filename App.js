import React, { Component }  from 'react';
import { StyleSheet,} from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src';

/**Start Stack Navigation Screen*/
import LoginScreen from './src/StartStack/login';
import ForgotPasswordScreen from './src/StartStack/forgotpassword';

/**Create Account Stack Navigation Screen*/
import AccountRoleScreen from './src/CreateAccountStack/selectrole';
import AdminSignupScreen from './src/CreateAccountStack/adminsignup';
import UserSignupScreen from './src/CreateAccountStack/usersignup';

import MainDrawerNav from './src/MainDrawerNav'

const LoginStack = createStackNavigator({
  Login: {screen: LoginScreen,},
  ForgotPassword: {screen: ForgotPasswordScreen,},
},{headerMode: 'screen'})

const AccountStack = createStackNavigator({
  AccountRole: {screen: AccountRoleScreen,},
  AdminSignup: {screen: AdminSignupScreen,},
  UserSignup: {screen: UserSignupScreen,},
},{headerMode: 'screen'});

const MainNavigator = createSwitchNavigator({
  Index: IndexScreen,
  LoginNavigator: LoginStack,
  AccountNavigator: AccountStack,
  MainDrawerNav: {screen: MainDrawerNav,},
},
{
  initialRouteName: 'Index',
});

const AppContainer =  createAppContainer(MainNavigator);

export default class App extends Component{
  render(){
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
  },
});

