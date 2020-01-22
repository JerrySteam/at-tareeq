import React, { Component } from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          console.log('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function (error) {
        console.log('Login failed with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.fbAuth.bind(this)}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

module.exports = FBLoginButton;