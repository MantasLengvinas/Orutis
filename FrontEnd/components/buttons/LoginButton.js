import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import TextStyles  from "../styles/Text";

function StyledButton({onPress, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <LinearGradient
        colors={["rgb(39, 111, 214)", "rgb(15,62,128)"]}
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
    width: 320,
    height: 50,
    justifyContent:'center',
  },
});