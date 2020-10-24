import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from "react-native";


export default function RegisterForm(props) {
    const {changeForm} = props;
    const [formData, setFormData] = useState(defaultValue());
    const [alertText, setAlertText] = useState(null);

    const register = () => {
        console.log(formData);
        let alertText = 'No errors';
        // Emails
        const emailPattern = /(\w+)@(\w+).([a-zA-Z]+)/gm;
        const isEmail = formData.email.match(emailPattern);
        // Password
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        const isValid = formData.password.match(passwordPattern);

        console.log(formData.password.length);
        if (formData.email === '' || formData.password === '' || formData.passwordRepeat === '')
            alertText = 'Rellena todos los campos.';
        else if (!isEmail)
            alertText = 'Ingresa un email valido.';
        else if (16 > formData.password.length && formData.password.length < 6)
            alertText = 'La contrasena debe contener de 6 a 20 caracteres.';
        else if (!isValid)
            alertText = 'La contrasena debe contener 1 minuscula, 1 mayuscula y 1 numero.';
        else if (formData.password !== formData.passwordRepeat)
            alertText = 'Las contrasenas no coinciden.';
        setAlertText(alertText);
    }
    return (
        <View>
            <Text style={styles.title}>Registrate!</Text>
            <Text style={styles.alert}>
                {alertText}
            </Text>
            <View style={styles.form}>
                <Text style={styles.label}>Correo:</Text>
                <TextInput style={styles.inputForm}
                           onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
                />
                <Text style={styles.label}>Contrasena:</Text>
                <TextInput style={styles.inputForm}
                           onChange={(e) => setFormData({...formData, password: e.nativeEvent.text})}
                />
                <Text style={styles.label}>Repetir contrasena:</Text>
                <TextInput style={styles.inputForm}
                           onChange={(e) => setFormData({...formData, passwordRepeat: e.nativeEvent.text})}
                />
                <TouchableOpacity style={{marginTop: 5}} onPress={register}>
                    <Text style={styles.button}>Registrarme</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.textButton}>Volver a login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function defaultValue() {
    return {
        email: '',
        password: '',
        passwordRepeat: ''
    }
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
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        color: 'white'
    },
    inputForm: {
        marginTop: 5,
        height: 40,
        marginBottom: 18,
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
        height: 35,
        shadowRadius: 10
    },
    textButton: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#7761a8',
        fontWeight: 'bold'
    },
    alert: {
        color: 'red',
        alignSelf: 'center',
        textAlign: 'center'
    }
});
