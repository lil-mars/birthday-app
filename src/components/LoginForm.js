import React, {Fragment} from 'react';
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";


export default function LoginForm(props) {
    const {changeForm} = props;
    const login = () => {
        console.log('Logging')
    }
    return (
        <View>
            <Text style={styles.title}>Birthday App!</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Correo:</Text>
                <TextInput style={styles.inputForm}/>
                <Text style={styles.label}>Contrasena:</Text>
                <TextInput style={styles.inputForm}/>
                <TouchableOpacity style={{marginTop: 20}}>
                    <Text style={styles.button}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 20}} onPress={changeForm}>
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
    label: {
        color: 'white',
        fontWeight: 'bold'
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
        backgroundColor: '#ffd5ef',
        borderColor: '#7761a8',
        borderRadius: 10,
        borderWidth: 1,
        textAlign: 'center'
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
        height: 40,
        shadowRadius: 10
    }
});
