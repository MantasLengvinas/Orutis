import React from "react";
import { StyleSheet, Image } from "react-native";

function Icon() {
  return (
        <Image
          style={styles.icon}
          source={require("../../assets/raster/icon.png")}
        />
  );
}

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 180, 
    height: 180,
    marginBottom: 30,
    opacity: 0.5,
  },
});
