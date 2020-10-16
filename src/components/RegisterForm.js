import React from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from "react-native";


export default function RegisterForm() {
    return(
        <View>
            <Image style={styles.logo} source={require('../../assets/favicon.png')}/>
            <Text style={styles.title}>REGISTRO!</Text>
            <View style={styles.form}>
                <Text>Correo:</Text>
                <TextInput style={styles.inputForm}/>
                <Text>Contrasena:</Text>
                <TextInput style={styles.inputForm}/>
                <Text>Repetir contrasena:</Text>
                <TextInput style={styles.inputForm}/>

                <TouchableOpacity style={{marginTop: 20}}>
                    <Text style={styles.button}>Registrarme</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: '15%'
    },
    form: {
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40,
        color: 'white'
    },
    inputForm: {
        marginTop: 10,
        height: 40,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#7761a8',
        color: 'white',
        width: "75%",
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: "2%",
        fontSize: 15,
        height: 35,
        shadowRadius: 10
    }
});
