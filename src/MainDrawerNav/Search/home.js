import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, Picker } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';

const users = [
  {
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
    date: 'Wednesday, Friday, Sunday',
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
    date: 'Saturday, Sunday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }, {
    title: 'The Four Caliphs',
    speaker: 'Malam Aminu Daurawa',
    location: 'No 5 Zaria Close, Fagge, Kano',
    time: '02:00pm - 05:00pm',
    date: 'Monday, Thursday',
    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
export class AppSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{ width: wp('80%'), padding: 0, backgroundColor: 'transparent', }}
        inputContainerStyle={{ borderRadius: wp('7%'), backgroundColor: 'transparent', }}
        inputStyle={{ fontFamily: 'sans-serif-thin', color: '#fff', }}
      />
    );
  }
}
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      category: '',
    };
  }
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#fff', paddingHorizontal: wp('2%'), paddingTop: wp('2%'), }}>
      <View style={styles.backgroundImage} borderRadius={wp('2%')}>
        <ListItem
          title={item.title}
          titleStyle={{ color: '#000', fontSize: wp('3.5%'), fontWeight: 'bold' }}
          subtitle={<ItemSubtitle speaker={item.speaker} location={item.location} date={item.date} time={item.time} />}
          leftAvatar={{ source: { uri: item.thumbnail }, size: wp('24%'), imageProps: { borderRadius: wp('100%') } }}
          containerStyle={{ backgroundColor: 'transparent', padding: wp('2.5%'), }}
          onPress={() => this.props.navigation.navigate('LectureDescription')}
        />
      </View>
    </View>
  )
  render() {
    return (
      <View>
        <View style={{backgroundColor:'#2D343E', height:wp('14%'), justifyContent:'center'}}>
          <Picker
            style={{width: wp('50%'), borderColor: '#fff', color: '#fff', alignSelf:'flex-end', backgroundColor:'#9B9EA3', height:wp('9%'), borderRadius: wp('7%'), marginRight: wp('2%'),}}

            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }>
            <Picker.Item label="Sort by..." value="" />
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Upcoming Lecture " value="upcoming" />
            <Picker.Item label="Routine Ta'leem" value="routine" />
            <Picker.Item label="Special Lecture" value="special" />
            <Picker.Item label="Speaker" value="speaker" />
            <Picker.Item label="Mosque" value="mosque" />
          </Picker>
        </View>
        <View style={{marginBottom:wp('30%')}}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={users}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#B5C3C3',
  },
  itemSubtitle: {
    fontSize: wp('3%'),
    color: '#000'
  }
});
export default Home;