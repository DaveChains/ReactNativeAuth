/**
 * Created by davidchains on 4/16/17.
 */
import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './Components/common';
import LoginForm from './Components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA5DKHsYYY4ycntdar7_VK6-ycSrhhQtj4",
            authDomain: "centraldeconfeferencias-1.firebaseapp.com",
            databaseURL: "https://centraldeconfeferencias-1.firebaseio.com",
            projectId: "centraldeconfeferencias-1",
            storageBucket: "centraldeconfeferencias-1.appspot.com",
            messagingSenderId: "1089616902499"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            }else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => {firebase.auth().signOut()}}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default :
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
        <View>
            <Header headerText="Authentication"/>
            {this.renderContent()}
        </View>

        );
    };



}

export default App;