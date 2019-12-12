
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HelpCenter extends Component {
    render() {
        return (
            <View>
                <Text>Help Center</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Home")}
                    title="Go To Home"
                />
            </View>
        );
    }
}



export default HelpCenter;