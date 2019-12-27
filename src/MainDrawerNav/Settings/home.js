
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Switch, AsyncStorage } from 'react-native';
import { Card, ListItem, Button, Icon, Divider, Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: null,
      fullname: null,
      displayname: null,
      phone: null,
      email: null,
      location: null,
      photourl: null,
      isLoading: false,
      mosquelocation: null,
      mosquename: null,
      mosquemessage: null
    }
  }
  
  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    //Get user info from AsyncStorage
    const userid = await retrieveData('userid');
    const fullname = await retrieveData('fullname');
    const displayname = await retrieveData('displayname');
    const phone = await retrieveData('phone');
    const email = await retrieveData('email');
    const location = await retrieveData('location');
    const photourl = await retrieveData('photourl');

    if (fullname !== null) {
      this.setState({
        userid: userid,
        fullname: fullname,
        displayname: displayname,
        phone: phone,
        email: email,
        location: location,
        photourl: photourl,
      });
    }

    const mosqueinfo = await this.getMosqueInfo(userid)
    const mosqueadmininfo = mosqueinfo.message

    if (mosqueinfo.success) {
      this.setState({
        mosquelocation: mosqueadmininfo[0].location,
        mosquename: mosqueadmininfo[0].mosquename,
      });
    } else {
      this.setState({
        mosquemessage: mosqueadmininfo
      });
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.profileThumbnailContainer}>
          <Avatar
            rounded
            size={wp('30%')}
            source={{ uri: this.state.photourl, }}
            containerStyle={{ marginTop: wp('5%'), marginBottom: wp('2%') }}
          />
          <Text style={styles.userName}>{this.state.fullname}</Text>
        </View>
        <View style={{ marginTop: wp('1%'), marginBottom: wp('1%') }}>
          <Card
            title='Profile'
            titleStyle={styles.cardTitle}
            dividerStyle={{ height: 0 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile",{
              userid: this.state.userid,
              fullname: this.state.fullname,
              displayname: this.state.displayname,
              phone: this.state.phone,
              email: this.state.email,
              location: this.state.location,
              photourl: this.state.photourl,
            })}>
              <Text style={styles.settingsText}>Edit Profile</Text>
            </TouchableOpacity>
            <Divider style={{ marginVertical: wp('4%') }}></Divider>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EditMajorProfile",{
              userid: this.state.userid,
              mosquelocation: this.state.mosquelocation,
              mosquename: this.state.mosquename,
              mosquemessage: this.state.mosquemessage,
            })}>
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
              <Switch />
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
            title='LOGOUT'
            loading={this.state.isLoading}
            disabled={this.state.isLoading}
            loadingProps={{ color: '#000' }}
            buttonStyle={styles.logoutButton}
            containerStyle={{ alignItems: 'center' }}
            onPress={() => this.onLogoutPress(this.props.navigation.navigate)}
          />
        </View>
      </ScrollView>
    );
  }

  onLogoutPress = (param) => {
    this.setState({ isLoading: true })
    logout(param)
  }

  getMosqueInfo = async (userid) => {
    const apiurl = global.url + 'getadminmosque.php'
    const formData = new FormData()
    formData.append('userid', userid)

    try {
      const response = await fetch(apiurl, {
        //handle post data
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      });

      const res = await response.json();
      return res
    }
    catch (err) {
      return console.log(err);
    }
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
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutButton: {
    width: wp('90%'),
    backgroundColor: 'red'
  },
});


export default Home;