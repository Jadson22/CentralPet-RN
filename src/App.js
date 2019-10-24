import React, { Component } from 'react';
import { YellowBox, StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Routes from './Routes';
import reducers from './reducers';
import NavigationService from './services/navigation';
import { MenuProvider } from 'react-native-popup-menu';

class App extends Component {

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDSwTIAlMZ4RjP7guUgowWv5QF8igTNBBs",
            authDomain: "centralpet-168902.firebaseapp.com",
            databaseURL: "https://centralpet-168902.firebaseio.com",
            projectId: "centralpet-168902",
            storageBucket: "",
            messagingSenderId: "537689968823",
            appId: "1:537689968823:web:b88b90a764e49286",
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    registerService = (ref) => {
        NavigationService.setTopLevelNavigator(ref);
    };

    isLogged() {
        if (firebase.auth().currentUser) {
            NavigationService.navigate('Agenda');
        }
    }
    componentDidMount() {
        this.isLogged();
    }

    render() {
        return (
                <View style={styles.container}>
                    <StatusBar backgroundColor="#03a9f4" barStyle="light-content" />
                    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                        <MenuProvider>
                            <Routes ref={this.registerService} />
                        </MenuProvider>
                    </Provider>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default App;