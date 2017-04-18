/**
 * Created by davidchains on 4/16/17.
 */
import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import {Header} from './Components/common';
import LoginForm from './Components/LoginForm';


class App extends Component {

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA5DKHsYYY4ycntdar7_VK6-ycSrhhQtj4",
            authDomain: "centraldeconfeferencias-1.firebaseapp.com",
            databaseURL: "https://centraldeconfeferencias-1.firebaseio.com",
            projectId: "centraldeconfeferencias-1",
            storageBucket: "centraldeconfeferencias-1.appspot.com",
            messagingSenderId: "1089616902499"
        })
    }

    render() {
        return (
        <View>
            <Header headerText="Authentication"/>

            <LoginForm/>
        </View>

        );
    };

}

export default App;