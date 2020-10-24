import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from "react-native";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
export default function Auth() {
    const [isLogged, setIsLogged] = useState(1);
     const changeForm = () => {
        setIsLogged(!isLogged);
    }
    return (
        <View style={styles.test}>
            <Image style={styles.logo} source={require('../../assets/cakee.png')}/>
            {isLogged ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm}/>}
        </View>
    );

}
const styles = StyleSheet.create({

    logo: {
        width: '50%',
        height: 120,
        alignSelf: 'center',
        marginTop: '15%',
    },
});
