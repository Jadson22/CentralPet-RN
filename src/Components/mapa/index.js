import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'native-base';
export default class Mapa extends Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}


Mapa.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name={'map-marker-radius'} size={42} color={tintColor} />
    )
}