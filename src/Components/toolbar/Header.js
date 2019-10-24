import React, { Component } from 'react';
import { Header, Right, Body, Title } from 'native-base';
import { StyleSheet } from 'react-native';
import { PoupClass } from './Poup';

export default class HeaderDeafult extends Component {
  render() {
    return (
      <Header androidStatusBarColor="#03a9f4" style={styles.header}>
        <Body>
          <Title>CENTRAL PET</Title>
        </Body>
        <Right>
            <PoupClass/>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#03a9f4",
  },
  header: {
    backgroundColor: "#03a9f4",
    elevation: 0,
  },
});




















