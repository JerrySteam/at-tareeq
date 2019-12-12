import React, { Component }  from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Button, Input, SocialIcon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Divider from 'react-native-divider';

export default class UserSignupScreen extends Component{
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

  static navigationOptions = {
    title: 'User Sign Up',
    headerTitleStyle: {
      fontSize: wp('6%'),
      color: '#fff'
    },
    headerTransparent: true,
    headerTintColor: '#fff',
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
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{alignItems: "center", paddingVertical: wp('12%')}}>
          <Input
            placeholder='Name'
            leftIcon={{type: 'font-awesome', name:'user', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'),}}
            containerStyle={{width: wp('83%'), marginTop:wp('14%')}}
          />
          <Input
            placeholder='Phone Number'
            leftIcon={{type: 'font-awesome', name:'phone', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'),}}
            containerStyle={{width: wp('83%'), marginTop:wp('5%')}}
          />
          <Input
            placeholder='Email'
            leftIcon={{type: 'font-awesome', name:'envelope', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'),}}
            containerStyle={{width: wp('83%'), marginTop:wp('5%')}}
          />
          <Input
            placeholder='Location'
            leftIcon={{type: 'font-awesome', name:'map-pin', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'),}}
            containerStyle={{width: wp('83%'), marginTop:wp('5%')}}
          />
          <Input
            placeholder='Password'
            secureTextEntry = {true}
            leftIcon={{type: 'font-awesome', name:'lock', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%')}}
            containerStyle={{width: wp('83%'), marginTop: wp('5%'),}}
          />
          <Input
            placeholder='Confirm Password'
            secureTextEntry = {true}
            leftIcon={{type: 'font-awesome', name:'lock', size:wp('5%'), color:'gray' }}
            inputStyle={{color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%')}}
            containerStyle={{width: wp('83%'), marginTop: wp('5%'),}}
          />
          
          <Button
            title="SUBMIT"
            titleStyle={styles.loginButtonTitle}
            buttonStyle ={styles.loginButton}
            //icon={{name: "location-arrow", size: wp('5%'), color: "white"}}
            onPress={() => navigate('Index')} 
          />
        
          <Divider orientation="center" borderColor="gray">
            <Text style={styles.socialSignIn}>Continue with</Text>
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
        </ScrollView>
        </KeyboardAvoidingView>
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
    fontSize: wp('5.56%'),
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    marginTop: wp('35%')
  },
  loginButtonTitle:{
    fontFamily:'Roboto', 
    color:'#fff',
  },
  loginButton: {
    borderRadius:wp('6.94%'), 
    width:wp('65%'),
    height: hp('8%'),
    marginVertical: wp('8%')  
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
