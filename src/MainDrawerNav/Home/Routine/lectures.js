import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';
const users = [
  {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Wednesday, Friday, Sunday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },{
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Saturday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
class ItemSubtitle  extends Component{
  render(){
    return(
      <View>
        <Text style={styles.itemSubtitle}>{this.props.speaker}</Text>
        <Text style={styles.itemSubtitle}>{this.props.location}</Text>
        <Text style={styles.itemSubtitle}>
          {this.props.time} ({this.props.date})
        </Text>
      </View>
    );
  }
}
class LectureScreen extends Component {
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <View style={{backgroundColor: '#fff', paddingHorizontal: wp('2%'), paddingTop: wp('2%'),}}>
    <ImageBackground style={styles.backgroundImage} source={ require('../../../../backgroundimage/login.png')} borderRadius={wp('2%')}>
      <ListItem
        title={item.title}
        titleStyle={{color:'#fff', fontSize:wp('3.5%'), fontWeight:'bold'}}
        subtitle={<ItemSubtitle speaker={item.speaker} location={item.location} date={item.date} time={item.time} />}
        leftAvatar={{source: {uri: item.thumbnail}, size:wp('24%'), imageProps:{borderRadius:wp('100%'), PlaceholderContent:<ActivityIndicator />}}}
        containerStyle={{backgroundColor:'transparent', padding:wp('2.5%'),}}
      />
    </ImageBackground>
    </View>
  )
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={users}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  itemSubtitle:{
    fontSize:wp('3%'),
    color:'#fff'
  }
});
export default LectureScreen;