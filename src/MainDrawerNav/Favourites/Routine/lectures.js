import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';
const users = [
  {
    title: 'The Four Caliphs 1',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 2',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Wednesday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 3',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 4',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 5',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 6',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 7',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 8',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs 9',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
//the class below requires
class RoutineTaleemLecture extends Component {
  render() {
    return (
      <View style={styles.favouriteRTWrapper}>
        <View style={styles.favouriteRTContainer}>
          <View style={styles.favouriteRTThumbnailContainer}>
            <Image
              source={{ uri: this.props.thumbnail }}
              style={styles.favouriteRTThumbnail}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.favouriteRTContent}>
            <Text style={styles.favouriteRTSpeaker}>{this.props.speaker} </Text>
            <Text style={styles.favouriteRTTitle}>{this.props.title}</Text>
            <Text style={styles.favouriteRTSubtitle}>{this.props.location} </Text>
            <Text style={styles.favouriteRTSubtitle}>{this.props.time} ({this.props.date})</Text>
          </View>
        </View>
        <Button
          buttonStyle={styles.favouriteRTRemoveButton}
          title='REMOVE' />
      </View>
    );
  }
}
class LectureScreen extends Component {
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <RoutineTaleemLecture 
      thumbnail={item.thumbnail}
      speaker={item.speaker} 
      title={item.title}
      location={item.location} 
      date={item.date} 
      time={item.time}
    />
  )
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={users}
        renderItem={this.renderItem}
        numColumns={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  favouriteRTWrapper: {
    backgroundColor: '#E4E9ED',
    paddingHorizontal: wp('2%'),
    paddingTop: wp('2%'),
    width: wp('50%')
  },
  favouriteRTContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#27313B',
    paddingBottom: 0,
    borderTopRightRadius: wp('2%'),
    borderTopLeftRadius: wp('2%'),
  },
  favouriteRTThumbnailContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: wp('5%')
  },
  favouriteRTThumbnail: {
    width: wp('22%'),
    height: wp('22%'),
    borderRadius: wp('100%'),
  },
  favouriteRTContent: {
    padding: wp('3%'),
  },
  favouriteRTSpeaker: {
    fontSize: wp('3%'),
    color: '#fff',
    textTransform:'uppercase',
    paddingBottom: wp('1%'),
  },
  favouriteRTTitle: {
    fontSize: wp('3%'),
    color: '#fff'
  },
  favouriteRTSubtitle: {
    fontSize: wp('2.5%'),
    color: '#fff'
  },
  favouriteRTRemoveButton: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    borderBottomLeftRadius: wp('2%'),
    borderBottomRightRadius: wp('2%'),
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  }

});
export default LectureScreen;