import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TextStyles  from "../styles/Text";

function StyledButton({onPress, children }) {
  return (
    <TouchableOpacity
      // color= "rgba(0,0,0,0)"
      // style={{elevation: 0}}
      onPress={onPress}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["rgb(39, 111, 214)", "rgb(15, 62, 128)"]}
        style={styles.linearGradient}
      >
        <Text style={TextStyles.button}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default StyledButton;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 0,
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 0.8,
    width: 180,
    height: 80,
    justifyContent:'center',
  },
});
