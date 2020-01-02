import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Avatar, Text, Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SimpleAccordion from 'react-native-simple-accordian';
import * as _ from 'lodash'


const deviceWidth = Dimensions.get('window').width

export default class AddRoutineTaleem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      isLoading: false,
      sunday: [{ 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null }],
      monday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
      tuesday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
      wednesday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
      thursday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
      friday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
      saturday: { 'title': '', 'speaker': '', 'time': '', 'briefinfo': '', 'photourl': null },
    }
  }

  onChangeAccordian(section) {
    this.setState({ open: section });
  }

  renderHeader(section, i, isOpen) {
    return (
      <View style={{ backgroundColor: '#ffffff', flexDirection: 'row' }}>
        <Text style={[styles.headerText, { width: deviceWidth - 80, padding: 10, textAlign: 'left' }]}>{section.title}</Text>
      </View>
    );
  }

  renderContent(section, i, isOpen) {
    return (
      <View style={styles.content}>
        {section.content}
      </View>
    );
  }

  sundayContent = () => {
    return (
      <View>
        <Avatar
          size="large"
          rounded
          showEditButton
          icon={{ name: 'user', type: 'font-awesome' }}
          source={{ uri: this.state.sunday.photourl }}
          containerStyle={{alignSelf:'center'}}
          onPress={() => this.selectPhoto()}
          onEditPress={() => this.selectPhoto()}
        />
        <Button
          title="Delete Photo"
          type="clear"
          titleStyle={{ color: '#000' }}
          onPress={() => this.deletePhoto()}
        />
        <Input
          placeholder='Lecture title'
          leftIcon={{ type: 'font-awesome', name: 'book', size: wp('5%'), color: 'gray' }}
          inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
          containerStyle={{ width: wp('95%'), }}
          onChangeText={input => this.setState({ sunday: [{ 'title': input }] })}
          value={this.state.sunday.title}
        />
        <Input
          placeholder='Speaker'
          leftIcon={{ type: 'font-awesome', name: 'user', size: wp('5%'), color: 'gray' }}
          inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
          containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
          onChangeText={input => this.setState({ sunday: [{ 'speaker': input }] })}
          value={this.state.sunday.speaker}
        />
        <Input
          placeholder='Time'
          leftIcon={{ type: 'font-awesome', name: 'clock-o', size: wp('5%'), color: 'gray' }}
          inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
          containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
          onChangeText={input => this.setState({ sunday: [{ 'time': input }] })}
          value={this.state.sunday.time}
        />
        <Input
          placeholder='Brief info about the lecture (Optional)'
          leftIcon={{ type: 'font-awesome', name: 'edit', size: wp('5%'), color: 'gray' }}
          inputStyle={{ color: '#000', paddingHorizontal: wp('2%'), fontSize: wp('4.5%'), }}
          containerStyle={{ width: wp('95%'), marginTop: wp('2%') }}
          onChangeText={input => this.setState({ sunday: [{ 'briefinfo': input }] })}
          value={this.state.sunday.briefinfo}
        />
      </View>
    )
  }
  render() {
    const sampleAccordianData = [
      {
        title: 'Sunday',
        content: this.sundayContent()
      },
      {
        title: 'Monday',
        content: this.sundayContent()
      },
      {
        title: 'Tuesday',
        content: this.sundayContent()
      },
      {
        title: 'Wednesday',
        content: this.sundayContent()
      },
      {
        title: 'Thursday ',
        content: this.sundayContent()
      },
      {
        title: 'Friday',
        content: this.sundayContent()
      },
      {
        title: 'Saturday',
        content: this.sundayContent()
      },

    ];
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.container}>
          <ScrollView >
            <SimpleAccordion
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 10,
                padding: 10,
                backgroundColor: '#ffffff'
              }}
              activeSection={this.state.open}
              sections={sampleAccordianData}
              touchableComponent={TouchableOpacity}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={500}
              onChange={this.onChangeAccordian.bind(this)}
            />
          </ScrollView>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color: '#ffffff'
  },
  header: {
    flex: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
