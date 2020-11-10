import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function StyledButton({title,onPress}) {
  return (
    <TouchableOpacity 
      color= "rgba(0,0,0,0)"
      style={{elevation: 0}}
      onPress={onPress}
      >
      <LinearGradient
        // Background Linear Gradient
        colors={["rgb(39, 111, 214)", "rgb(15,62,128)"]}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
      </TouchableOpacity>
  );
}
export default StyledButton;

const styles = StyleSheet.create ({
  linearGradient: {
    padding:0,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 0.8,
    width: 320,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 7.5,
    fontSize: 20,
  }
});

//<Button
//        title={title}
//        onPress={onPress}
//        color="rgba(0,0,0,0)"
//        style={{elevation: 0,}}
//      />