import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LectureDescScreen extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../../../../backgroundimage/description.jpg')}>
        <View>
          <ScrollView>
            <View style={styles.lectureTitleBox}>
              <Text style={styles.lectureTitle}>The Four Caliphs The Four Caliphs The Four Caliphs The Four Caliphs</Text>
              <Avatar rounded size={wp('40%')} source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: wp('4%'), marginTop: wp('10%') }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='user' type='font-awesome' size={wp('4%')} color='skyblue' />
                  <Text style={styles.itemSubtitle}>Dr Isah Pantami</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='map-pin' type='font-awesome' size={wp('4%')} color='red' />
                  <Text style={styles.itemSubtitle}>Central Mosque, Abuja</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='calendar' type='font-awesome' size={wp('4%')} color='limegreen'/>
                  <Text style={styles.itemSubtitle}>12 Rabii 1440 - 26/12/2019</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='clock-o' type='font-awesome' size={wp('4%')} color='lightblue' />
                  <Text style={styles.itemSubtitle}>09am - 12:00pm</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.lectureInfo}>Function which returns a React Element to display custom image in header's back button. When a function is used, it receives the tintColor in it's argument object. </Text>
              </View>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', marginTop: wp('13%'), alignItems:'center', justifyContent:'center', }}>
              <Icon name='map-marker' color='purple' type='font-awesome' containerStyle={{marginRight:wp('8%')}} onPress={() => console.log('Map View')} />
              <Icon name='volume-up' color='#00aced' type='font-awesome' containerStyle={{marginHorizontal:wp('8%')}} onPress={() => console.log('Notification')} />
              <Icon name='star-o' color='orange' type='font-awesome' containerStyle={{marginHorizontal:wp('8%')}} onPress={() => console.log('Favourite')} />
              <Icon name='share' color='limegreen'type='font-awesome' containerStyle={{marginLeft:wp('8%')}} onPress={() => console.log('Share')} />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: wp('100%'),
    height: wp('48%'),
  },
  itemSubtitle: {
    fontSize: wp('3%'),
    marginBottom: wp('2%'),
    paddingLeft: wp('1.5%'),
  },
  lectureInfo: {
    fontSize: wp('3.5%'),
  },
  lectureTitleBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lectureTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: wp('15%'),
    marginBottom: wp('3%'),
    paddingHorizontal: wp('5%'),
  }
});
export default LectureDescScreen;