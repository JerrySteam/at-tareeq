import React, { Component }  from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView } from 'react-native';
//import { Container, Header, Content} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
//import { Ionicons } from '@expo/vector-icons';
import { Button, Input, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Divider from 'react-native-divider';

export default class LoginScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Impact: require('../../assets/fonts/impact.ttf'),
    });
    this.setState({ isReady: true });
  }
  /**
  static navigationOptions = {
    title: 'Log into your account',
    headerTitleStyle: {
      fontSize: wp('6%'),
      color: '#fff'
    },
    headerTransparent: true,
    headerTintColor: '#fff',
  }; */
  static navigationOptions = {
    header: null
  };
  render(){
    const {navigate} = this.props.navigation;
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
          style= {{marginTop: wp('12.5%'), marginLeft: wp('5%')}}
          onPress={() => navigate('Index')} 
        /> 
        <View style={styles.appContainer}>
          <Text style={styles.appSubTitle}>Log into your account</Text>
          <Input
            placeholder='Email/Phone No'
            /*
            label='Email/Phone No'
            labelStyle = {{fontSize: wp('5%')}}*/
            leftIcon={{type: 'font-awesome', name:'user', size:wp('7%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'),}}
            containerStyle={{width: wp('83%'), marginTop:wp('16%')}}
          />
          <Input
            placeholder='Password'
            secureTextEntry = {true}
            leftIcon={{type: 'font-awesome', name:'lock', size:wp('7%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%')}}
            containerStyle={{width: wp('83%'), marginVertical: wp('6%'),}}
          />
          
          <Button
            title="LOGIN"
            type='outline'
            titleStyle={styles.loginButtonTitle}
            buttonStyle ={styles.loginButton}
            onPress={() => navigate('MainDrawerNav')} 
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
          
          <View style={{flexDirection: "row", marginTop: wp('4%')}}>
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
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  appTitle:{
    fontSize: wp('11.11%'),
    color: '#fff',
    fontFamily: 'Impact', //sans-serif-condensed
    marginTop:wp('-35%'),
  }, 
  appSubTitle:{
    fontSize: wp('6%'),
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    marginTop: wp('-30%')
  },
  loginButtonTitle:{
    fontFamily:'Roboto', 
    color:'#fff',
  },
  loginButton: {
    borderRadius:wp('6.94%'), 
    width:wp('65%'),
    height: hp('8%'),
    borderColor: 'gray',
    backgroundColor: 'gray',
    opacity: 0.4,
    marginVertical: wp('4%')  
  },
  forgotPassword:{
    fontSize: wp('5%'),
    color: '#fff',
    fontFamily:'Roboto',
    marginBottom: wp('6%'),
  },
  socialSignIn:{
    fontSize: wp('5%'),
    color: '#fff',
    fontFamily:'Roboto',
  },
});
