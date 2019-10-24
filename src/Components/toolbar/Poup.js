import React from 'react';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { Icon, View, Text } from 'native-base';
import { StyleSheet, } from 'react-native';
import NavigationService from '../../services/navigation';
import firebase from 'firebase';

export const PoupClass = () => (
    <View style={{width:20}}>
        <Menu>
            <MenuTrigger>
                <Icon name="more" style={{ color: 'white' }} />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption onSelect={() => alert(`Save`)} >
                    <Text style={styles.menuContent}>Dúvidas frequentes</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Save`)} >
                    <Text style={styles.menuContent}>Parceiros</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Save`)} >
                    <Text style={styles.menuContent}>InfoApp</Text>
                </MenuOption>
                <MenuOption onSelect={() => firebase.auth().signOut().then(()=>NavigationService.navigate('FormLogin'))}>
                    <Text style={styles.menuContent}>Sair</Text>
                </MenuOption> 
            </MenuOptions>
        </Menu>
    </View>
);
const styles = StyleSheet.create({
    menuContent: {
        padding: 1,
        fontSize: 15
    }
});