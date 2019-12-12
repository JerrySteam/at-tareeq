import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { Button, Input, Avatar, Text, Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker'

export default class AddRoutineTaleem extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return (
      <View style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100}>
          <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: wp('5%')}}>
            {/**Sunday */}
            <Card
              title='Sunday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Sunday */}

            {/**Monday */}
            <Card
              title='Monday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Monday*/}

            {/**Tuesday*/}
            <Card
              title='Tuesday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Tuesday*/}

            {/**Wednesday*/}
            <Card
              title='Wednesday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Wednesday*/}

            {/**Thursday*/}
            <Card
              title='Thursday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Thursday*/}

            {/**Friday*/}
            <Card
              title='Friday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Friday*/}

            {/**Saturday*/}
            <Card
              title='Saturday'
              titleStyle={styles.cardTitle}
              containerStyle={styles.cardContainer}
              dividerStyle={{ height: 0 }}
            >
              <Input
                placeholder='Lecture title'
                leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), }}
              />
              <Input
                placeholder='Speaker'
                leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Time'
                leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
              <Input
                placeholder='Brief info about the lecture (Optional)'
                leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
                inputStyle={{ color: '#fff', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
                containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
              />
            </Card>
            {/**End Saturday*/}
            <Button
              title="POST"
              titleStyle={styles.loginButtonTitle}
              buttonStyle={styles.loginButton}
              icon={{ name: "send", size: wp('5%'), color: "white" }}
              onPress={() => navigate('Index')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
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
  loginButtonTitle: {
    fontFamily: 'Roboto',
    color: '#fff',
  },
  loginButton: {
    borderRadius: wp('6.94%'),
    width: wp('65%'),
    height: hp('8%'),
    marginVertical: wp('8%')
  },
  cardTitle: {
    fontSize: wp('5%'),
    color: '#000',
    marginBottom:wp('-3%'),
  },
  cardContainer:{
    width:wp('95%'), 
    paddingHorizontal:0, 
    paddingVertical: wp('5%')
  }
});
