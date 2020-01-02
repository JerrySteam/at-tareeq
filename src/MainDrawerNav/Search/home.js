import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, Picker,ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/FontAwesome';

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
      category: '',
      specialLectures: [],
      loading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    //Get username from AsyncStorage
    const specialLectures = await this.getSpecialLectures();
    this.setState({
      specialLectures: specialLectures,
      loading: false,
      refreshing: false,
    });
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.loadInitialState().done;
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#fff', paddingHorizontal: wp('2%'), paddingTop: wp('2%'), }}>
      <View style={styles.backgroundImage} borderRadius={wp('2%')}>
        <ListItem
          title={item.topic}
          titleStyle={{ color: '#000', fontSize: wp('3.5%'), fontWeight: 'bold' }}
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
      </View>
    </View>
  )
  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="large" color="#e2e2e2" style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }} />
      );
    }

    if (!this.state.specialLectures.success) {
      return (
        <View style={{ alignItems: 'center', marginTop: wp('50%') }}>
          <Text>{this.state.specialLectures.message}</Text>
          <TouchableOpacity onPress={() => this.onRefresh()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View>
        <View style={{ backgroundColor: '#2D343E', height: wp('14%'), justifyContent: 'center' }}>
          <Picker
            prompt = "Sort items by"
            style={{ width: wp('50%'), borderColor: '#fff', color: '#fff', alignSelf: 'flex-end', backgroundColor: '#9B9EA3', height: wp('9%'), borderRadius: wp('7%'), marginRight: wp('2%'), }}
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
        <View style={{ marginBottom: wp('30%') }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.specialLectures.message}
            renderItem={this.renderItem}
            refreshing = {this.state.refreshing}
            onRefresh = {() => this.onRefresh()}
          />
        </View>
      </View>
    );
  }

  getSpecialLectures = async () => {
    const apiurl = global.url + 'getalllectures.php'
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
    backgroundColor: '#B5C3C3',
  },
  itemSubtitle: {
    fontSize: wp('3%'),
    color: '#000'
  }
});
export default Home;