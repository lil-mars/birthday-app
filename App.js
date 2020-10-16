import {StatusBar} from 'expo-status-bar';
import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import firebase from './src/firebase';
import LoginForm from "./src/components/LoginForm";
import RegisterForm from './src/components/RegisterForm';
import FriendsList from "./src/components/FriendsList";

export default function App() {
    return (
        <LinearGradient colors={['#A88BEB', '#F8CEEC']} style={styles.background}>
            <View style={styles.container}>
                {/*<LoginForm></LoginForm>*/}
                {/*<RegisterForm></RegisterForm>*/}
                <FriendsList></FriendsList>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        margin: 12
    }
});
