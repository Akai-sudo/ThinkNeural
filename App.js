import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { Animated, StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

/**const Neuron = () => {
    return <View style={styles.circle} />;
}

 <View style={styles.fixToText}>
 <Button
 title="Continue to the Neural Net!"
 onPress={() => Alert.alert('Loading neurons...')}
 />
 </View>

 <Button style={styles.button} title="Continue >" onPress={() => Alert.alert('Loading neurons...')} />

 **/
function App(props) {
  const { onPress, title = 'Continue >' } = props;
  this.shakeAnimation = new Animated.Value(0);

  startShake = () => {
    Animated.sequence([
      Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
 }




  handleAnimation = () => {
    // A loop is needed for continuous animation
    Animated.loop(
      // Animation consists of a sequence of steps
      Animated.sequence([
        // start rotation in one direction (only half the time is needed)
        Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
        // rotate in other direction, to minimum value (= twice the duration of above)
        Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
        // return to begin position
        Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
      ])
    ).start(); 
    }


  return (
     // <NavigationContainer>

     
    <View style={styles.container}>
      <LinearGradient colors={['rgba(0,150,255,0.9)', 'transparent']} style={styles.linearGradient}>

        <View style={styles.fixToText}>
          <Text style={styles.mainTitle}>Hello!{"\n"}This is a simple Neuron. On it's own it's just a number.</Text>
        </View>

        <StatusBar style="auto" />

        <Animated.View style={{ transform: [{translateX: this.shakeAnimation}] }}>  
        <View style={styles.circle }/>
          </Animated.View>





        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>



      </LinearGradient>
    </View>

     // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#24a0ed',
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  mainTitle: {
    padding: 30,
    margin: 20,
    //shadowOffset: 0.1,
    shadowRadius: 100,
    shadowColor: "black",
    fontSize: 38,
    textAlign: "center",
    color: 'white',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    marginTop: 50,
    backgroundColor: 'white',
    //backgroundColor: ['rgba(0,150,255,0.9)', 'transparent'],

  },

  circle: {
    height: 75,
    width: 75,
    marginBottom: 20,
    blurRadius: 1,
    borderRadius: 75/2,
    backgroundColor: 'white',
  }
});


export default App;
