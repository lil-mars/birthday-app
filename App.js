import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
      <LinearGradient colors={['#A88BEB', '#F8CEEC' ]} style={styles.background}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto"/>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background:{
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
