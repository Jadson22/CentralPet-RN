import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Agenda extends Component {
  render() {
    return (
      <Container>
        <ActionButton buttonColor="#03a9f4">
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Outras atividades"
            onPress={() => { }}>
            <Icon
              type="FontAwesome"
              name="calendar-plus-o"
              size={28}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#DD5144"
            title="Vacinas"
            onPress={() => { }}>
            <Icon2
              type="MaterialCommunityIcons"
              name="needle"
              size={30}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
        </ActionButton>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    color: 'white',
  },
});

Agenda.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'calendar-o'} size={32} color={tintColor} />
  )
}