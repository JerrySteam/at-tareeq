import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';
class ItemSubtitle extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemSubtitle}>{this.props.speaker}</Text>
        <Text style={styles.itemSubtitle}>{this.props.location}</Text>
        <Text style={styles.itemSubtitle}>{this.props.date}</Text>
        <Text style={styles.itemSubtitle}>{this.props.time}</Text>
      </View>
    );
  }
}
class LectureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialLectures: [],
    }
  }
  componentDidMount(){
    this.loadInitialState().done();
  }

  loadInitialState = async () =>{
    //Get username from AsyncStorage
    const specialLectures = await this.getSpecialLectures();
    this.setState({
      specialLectures:specialLectures,
    });
  }
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#fff', paddingHorizontal: wp('2%'), paddingTop: wp('2%'), }}>
      <ImageBackground style={styles.backgroundImage} source={require('../../../../backgroundimage/login.png')} borderRadius={wp('2%')}>
        <ListItem
          title={item.topic}
          titleStyle={{ color: '#fff', fontSize: wp('3.5%'), fontWeight: 'bold' }}
          subtitle={
            <ItemSubtitle 
              speaker={item.speaker} 
              location={item.location} 
              date={item.dayordate} 
              time={item.time} 
            />
          }
          leftAvatar={{ source: { uri: item.speakerphotourl }, size: wp('24%'), imageProps: { borderRadius: wp('100%'), PlaceholderContent: <ActivityIndicator /> } }}
          containerStyle={{ backgroundColor: 'transparent', padding: wp('2.5%'), }}
          onPress={() => this.props.navigation.navigate('LectureDescription', {
            lectureid: item.lectureid,
            topic: item.topic,
            speaker: item.speaker,
            location: item.location,
            date: item.dayordate,
            time: item.time,
            briefinfo: item.briefinfo,
            photourl: item.speakerphotourl,
          })}
        />
      </ImageBackground>
    </View>
  )
  render() {
    if (!this.state.specialLectures.success) {
      return (
        <View>{this.state.specialLectures.message}</View>
      )
    }
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.specialLectures.message}
        renderItem={this.renderItem}
      />
    );
  }

  getSpecialLectures = async() => {
    const apiurl = global.url + 'homespeciallectures.php'
    try {
      const response = await fetch(apiurl, {
        //handle post data
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const res = await response.json();
      //console.log(res)
      return res;
    }
    catch (err) {
      return console.log(err);
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  itemSubtitle: {
    fontSize: wp('3%'),
    color: '#fff'
  }
});
export default LectureScreen;