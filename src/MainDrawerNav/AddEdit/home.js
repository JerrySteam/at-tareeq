
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Switch } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: wp('30%') }}>
          <Button
            type='outline'
            title='Add Lecture'
            titleStyle={{color:'#000'}}
            buttonStyle={styles.button}
            containerStyle={{ alignItems: 'center',}}
            onPress={() => this.props.navigation.navigate("AddLecture")}
            
          />
        </View>
        <View style={{ marginTop: wp('7%') }}>
          <Button
            type='outline'
            title='Edit Lecture'
            titleStyle={{color:'#000'}}
            buttonStyle={styles.button}
            containerStyle={{ alignItems: 'center',}}
            onPress={() => this.props.navigation.navigate("EditLecture")}
            
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: wp('90%'),
    height: wp('15%'),
    borderColor:'#9B9EA3',
  },
});


export default Home;