import React, { Component } from 'react';
import { StyleSheet, Image, View, KeyboardAvoidingView, ScrollView, Picker, ActivityIndicator } from 'react-native';
import { Button, Input, Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const user = [
  {
    name: 'Ahmad Idris',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    displayname: 'AI',
    phone: '07012345678',
    email: 'ahmadai@gmail.com'
  }
]
class EditProfile extends Component {
  render() {
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: wp('5%')}}>
              <Image
                source={{ uri: user[0].thumbnail }}
                style={styles.profileThumbnail}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Input
                label='Full Name'
                labelStyle={{ fontSize: wp('4%') }}
                placeholder='Full Name'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('63%'),}}
                value={user[0].name }
              />
            </View>
            <Input
              label='Display Name'
              labelStyle={{ fontSize: wp('4%') }}
              placeholder='Display Name'
              leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
              inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
              containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              value={user[0].displayname }
            />
            <Input
              label='Phone Number'
              labelStyle={{ fontSize: wp('4%') }}
              placeholder='Phone Number'
              leftIcon={{ type: 'font-awesome', name: 'phone', size: wp('5%'), color: 'gray' }}
              inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
              containerStyle={{ width: wp('95%'), marginTop: wp('5%') }}
              value={user[0].phone }
            />
            <Input
              label='Email Address'
              labelStyle={{ fontSize: wp('4%') }}
              placeholder='Email Address'
              leftIcon={{ type: 'font-awesome', name: 'envelope', size: wp('5%'), color: 'gray' }}
              inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
              containerStyle={{ width: wp('95%'), marginTop: wp('5%') }}
              value={user[0].email }
            />
            <Button
              title="SUBMIT"
              titleStyle={styles.loginButtonTitle}
              buttonStyle={styles.loginButton}
              onPress={() => navigate('Index')}
            />

            <Card
              title='Change Password'
              titleStyle={styles.cardTitle}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Current Password'
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%') }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='New Password'
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%') }}
                containerStyle={{ width: wp('95%'), marginTop: wp('5%'), }}
              />
              <Input
                placeholder='Confirm New Password'
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%') }}
                containerStyle={{ width: wp('95%'), marginTop: wp('5%'), }}
              />
            </Card>
            <Button
              title="CHANGE PASSWORD"
              titleStyle={styles.loginButtonTitle}
              buttonStyle={styles.loginButton}
              onPress={() => navigate('Index')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: wp('5%'),
    color: '#000',
    textAlign: 'center'
  },
  profileThumbnail: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('100%'),
  },
  loginButtonTitle: {
    fontFamily: 'Roboto',
    color: '#fff',
  },
  loginButton: {
    borderRadius: wp('6.94%'),
    width: wp('65%'),
    height: hp('8%'),
    marginVertical: wp('8%')
  }
});
export default EditProfile;