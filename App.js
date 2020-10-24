import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import firebase from './src/firebase';
import LoginForm from "./src/components/LoginForm";
import RegisterForm from './src/components/RegisterForm';
import FriendsList from "./src/components/FriendsList";
import Auth from "./src/components/Auth";

export default function App() {
    const [user, setUser] = useState(undefined);
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((response) =>{
    //         console.log('User 1');
    //         setUser(response);
    //     })
    // }, []);
    return (

        <LinearGradient colors={['#A88BEB', '#F8CEEC']} style={styles.background}>
            <View style={styles.container}>
                {user ? <Text>Estas logeado</Text> : <Auth></Auth> }
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
