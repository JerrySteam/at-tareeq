import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, AsyncStorage, Switch } from 'react-native';
//import { Container, Header, Content} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
//import { Ionicons } from '@expo/vector-icons';
import { Button, Input, SocialIcon, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Divider from 'react-native-divider';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      username: '',
      password: '',
      isLoading: false,
      rememberMe: false,
      loggedIn: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Impact: require('../../assets/fonts/impact.ttf'),
    });
    const username = await this.getRememberedUser();
    const loggedin = await this.getKeepLoggedin();
    this.setState({
      isReady: true,
      username: username || "",
      rememberMe: username ? true : false
    });
    if (loggedin) {
      this.props.navigation.navigate('MainDrawerNav');
    }
  }
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <ImageBackground
        source={require('../../backgroundimage/login.png')}
        style={styles.backgroundImage}
        blurRadius={2}>
        <Icon
          name="arrow-left" size={20} color="white"
          style={{ marginTop: wp('12.5%'), marginLeft: wp('5%') }}
          onPress={() => navigate('Index')}
        />
        <View style={styles.appContainer}>
          <Text style={styles.appSubTitle}>Log into your account</Text>
          <Input
            placeholder='Email/Phone No'
            leftIcon={{ type: 'font-awesome', name: 'user', size: wp('7%'), color: 'gray' }}
            inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
            containerStyle={{ width: wp('83%'), marginTop: wp('16%') }}
            onChangeText={input => this.setState({ username: input })}
            value={this.state.username}
          />
          <Input
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={{ type: 'font-awesome', name: 'lock', size: wp('7%'), color: 'gray' }}
            inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%') }}
            containerStyle={{ width: wp('83%'), marginVertical: wp('6%'), }}
            onChangeText={input => this.setState({ password: input })}
            value={this.state.password}
          />
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              title='Remember Me'
              checked={this.state.rememberMe}
              onPress={() => this.toggleRememberMe(!this.state.rememberMe)}
              containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
              checkedColor="#fff"
              uncheckedColor="#fff"
              textStyle ={{color: '#fff'}}
            />
            <CheckBox
              title='Keep me logged in'
              checked={this.state.loggedIn}
              onPress={() => this.toggleKeepLoggedin(!this.state.loggedIn)}
              containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
              checkedColor="#fff"
              uncheckedColor="#fff"
              textStyle ={{color: '#fff'}}
            />
          </View>
          <Button
            title="LOGIN"
            type={(this.state.username === '' || this.state.password === '') ? 'outline' : 'solid'}
            loading={this.state.isLoading}
            disabled={this.state.isLoading}
            loadingProps={{ color: '#000' }}
            titleStyle={styles.loginButtonTitle}
            buttonStyle={styles.loginButton}
            onPress={() => this.login()}
          />
          <Button
            title="Forgot Password?"
            type="clear"
            titleStyle={styles.forgotPassword}
            onPress={() => navigate('ForgotPassword')}
          />
          <Divider orientation="center" borderColor="gray">
            <Text style={styles.socialSignIn}>Social Sign In</Text>
          </Divider>

          <View style={{ flexDirection: "row", marginTop: wp('4%') }}>
            <SocialIcon
              type='facebook'
            />
            <SocialIcon
              type='twitter'
            />
            <SocialIcon
              type='google'
            />
            <SocialIcon
              type='linkedin'
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  login = async () => {
    this.setState({ isLoading: true })

    let username = this.state.username
    let password = this.state.password
    if (username.trim() === "" || password.trim() === "") {
      alert("All fields are required")
      this.setState({ isLoading: false })
    } else {
      const apiurl = global.url + 'login.php'
      try {
        const response = await fetch(apiurl, {
          //handle post data
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: 'login',
            username: username,
            password: password,
          })
        });
        const res = await response.json();
        if (res.success) {
          const user = res.message[0];
          await storeData('userid', user.userid.toString());
          await storeData('fullname', user.fullname);
          await storeData('displayname', user.displayname);
          await storeData('phone', user.phone);
          await storeData('email', user.email);
          await storeData('location', user.location);
          await storeData('photourl', user.photourl);
          await storeData('roleid', user.roleid.toString());
          this.setState({ isLoading: false })
          this.props.navigation.navigate('MainDrawerNav');
        }
        else {
          //console.log(res.message)
          alert(res.message);
          this.setState({ isLoading: false });
        }
      }
      catch (err) {
        return console.log(err);
      }
    }
  }

  toggleRememberMe = value => {
    this.setState({ rememberMe: value })
    if (value === true) {
      this.rememberUser();
    } else {
      this.forgetUser();
    }
  }
 
  rememberUser = async () => {
    try {
      await AsyncStorage.setItem('RMEU', this.state.username);
      console.log(await AsyncStorage.getItem('RMEU'));
    } catch (error) {
      // Error saving data
    }
  };

  getRememberedUser = async () => {
    try {
      const username = await AsyncStorage.getItem('RMEU');
      if (username !== null) {
        // We have username!!
        return username;
      }
    } catch (error) {
      console.log(error)
      // Error retrieving data
    }
  };

  forgetUser = async () => {
    try {
      await AsyncStorage.removeItem('RMEU');
    } catch (error) {
      // Error removing
    }
  };


  toggleKeepLoggedin = value => {
    this.setState({ loggedIn: value })
    if (value === true) {
      this.keepLoggedin();
    } else {
      this.forgetLoggedin();
    }
  }

  keepLoggedin = async () => {
    try {
      await AsyncStorage.setItem('RLGN', this.state.username);
      console.log(await AsyncStorage.getItem('RLGN'));
    } catch (error) {
      // Error saving data
    }
  };

  getKeepLoggedin = async () => {
    try {
      const loggedin = await AsyncStorage.getItem('RLGN');
      if (loggedin !== null) {
        // We have username!!
        return loggedin;
      }
    } catch (error) {
      console.log(error)
      // Error retrieving data
    }
  };

  forgetLoggedin = async () => {
    try {
      await AsyncStorage.removeItem('RLGN');
    } catch (error) {
      // Error removing
    }
  };
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  appTitle: {
    fontSize: wp('11.11%'),
    color: '#fff',
    fontFamily: 'Impact', //sans-serif-condensed
    marginTop: wp('-35%'),
  },
  appSubTitle: {
    fontSize: wp('6%'),
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    marginTop: wp('-25%')
  },
  loginButtonTitle: {
    fontFamily: 'Roboto',
    color: '#fff',
  },
  loginButton: {
    borderRadius: wp('6.94%'),
    width: wp('65%'),
    height: hp('8%'),
    marginVertical: wp('4%'),
    borderColor: 'gray',
    //backgroundColor: 'gray',
    //opacity: 0.4, 
  },
  forgotPassword: {
    fontSize: wp('4%'),
    color: '#fff',
    fontFamily: 'Roboto',
    marginBottom: wp('6%'),
  },
  socialSignIn: {
    fontSize: wp('5%'),
    color: '#fff',
    fontFamily: 'Roboto',
  },
});
