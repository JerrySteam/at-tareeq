
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PrivacyandLicenses extends Component {
    render() {
        return (
            <View>
                <Text>Privacy and Licenses</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Home")}
                    title="Go To Home"
                />
            </View>
        );
    }
}



export default PrivacyandLicenses;