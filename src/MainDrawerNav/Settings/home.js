
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Switch, AsyncStorage } from 'react-native';
import { Card, ListItem, Button, Icon, Divider, Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      photourl: null,
      isLoading: false,
    }
  }
  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    //Get username from AsyncStorage
    const fullname = await retrieveData('fullname');
    const photourl = await retrieveData('photourl');
    if (fullname !== null) {
      this.setState({
        fullname: fullname,
        photourl: photourl
      });
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.profileThumbnailContainer}>
          {/*<Image
            source={{ uri: this.state.photourl }}
            style={styles.profileThumbnail}
            PlaceholderContent={<ActivityIndicator />}
          />*/}
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
            loadingProps={{ color: '#fff' }}
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