import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 20}}>Coming Soon</Text>
            </View>
        );
    }
}



export default HomeScreen;