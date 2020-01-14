import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Avatar, Text, Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SimpleAccordion from 'react-native-simple-accordian';
import * as _ from 'lodash'


const deviceWidth = Dimensions.get('window').width

export default class HelpCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      loading: true,
      helpCenter: [],
    }
  }

  componentDidMount(){
    this.loadInitialState().done();
  }

  loadInitialState = async () =>{
    const helpCenter = await this.getHelpCenter();
    this.setState({
      helpCenter:helpCenter,
      loading: false,
    });
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
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    if(this.state.loading) { 
      return (
      	<ActivityIndicator size="large" color="#e2e2e2" style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center',}}/>
      ); 
    }

    if (!this.state.helpCenter.success) {
      return (
        <View style={{alignItems:'center', marginTop: wp('50%')}}>
          <Text>{this.state.helpCenter.message}</Text>
        </View>
      )
    }

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
              sections={this.state.helpCenter.message}
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

  getHelpCenter = async() =>{
    const apiurl = global.url + 'gethelpcenter.php'
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
      console.log(res)
      return res;
    }
    catch (err) {
      return console.log(err);
    }
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
