
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Switch } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const user = [
  {
    name: 'Ahmad Idris',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]
class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.profileThumbnailContainer}>
          <Image
            source={{ uri: user[0].thumbnail }}
            style={styles.profileThumbnail}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={styles.userName}>{user[0].name}</Text>
        </View>
        <View style={{ marginTop: wp('1%'), marginBottom: wp('1%') }}>
          <Card
            title='Profile'
            titleStyle={styles.cardTitle}
            dividerStyle={{ height: 0 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile")}>
              <Text style={styles.settingsText}>Edit Profile</Text>
            </TouchableOpacity> 
            <Divider style={{ marginVertical: wp('4%') }}></Divider>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EditMajorProfile")}>
              <Text style={styles.settingsText}>Edit Mosque, Organization, Location</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{ marginTop: wp('1%'), marginBottom: wp('1%') }}>
          <Card
            title='Notifications'
            titleStyle={styles.cardTitle}
            dividerStyle={{ height: 0 }}
          >
            <View style={styles.notificationContainer}>
              <Text style={styles.settingsText}>New Lectures</Text>
              <Switch/>
            </View>
            <Divider style={{ marginVertical: wp('4%') }}></Divider>
            <View style={styles.notificationContainer}>
              <Text style={styles.settingsText}>New Mosques</Text>
              <Switch />
            </View>
          </Card>
        </View>
        <View style={{ marginTop: wp('1%'), marginBottom: wp('1%') }}>
          <Card
            title='General'
            titleStyle={styles.cardTitle}
            dividerStyle={{ height: 0 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Feedback")}>
              <Text style={styles.settingsText}>Send Feedback</Text>
            </TouchableOpacity>
            <Divider style={{ marginVertical: wp('4%') }}></Divider>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("HelpCenter")}>
              <Text style={styles.settingsText}>Help Center</Text>
            </TouchableOpacity>
            <Divider style={{ marginVertical: wp('4%') }}></Divider>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("PrivacyandLicenses")}>
              <Text style={styles.settingsText}>Privacy & Licenses</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{ marginTop: wp('4%'), marginBottom: wp('8%') }}>
          <Button
            buttonStyle={styles.logoutButton}
            containerStyle={{ alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("LoginNavigator")}
            title='LOGOUT'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileThumbnailContainer: {
    alignItems: 'center',
    paddingTop: wp('5%')
  },
  profileThumbnail: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('100%'),
  },
  userName: {
    textTransform: 'uppercase',
    fontSize: wp('5%'),
    marginTop: wp('2%'),
  },
  cardTitle: {
    fontSize: wp('5%'),
    color: '#000',
    textAlign: 'left'
  },
  cardButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: wp('-7%'),
    justifyContent: 'flex-start'
  },
  cardButtonTitle: {
    color: '#000',
    fontFamily: 'sans-serif-light',
    fontWeight: 'normal'
  },
  settingsText: {
    fontSize: wp('4%'),
    fontFamily: 'sans-serif-light',
  },
  notificationContainer:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'space-between',
  },
  logoutButton: {
    width: wp('90%'),
    backgroundColor: 'red'
  },
});


export default Home;