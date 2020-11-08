import React from "react";
import { Button } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function StyledButton({title,onPress}) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgb(39, 111, 214)", "rgb(15,62,128)"]}
      style={{padding:0}}
    >
      <Button
        title={title}
        onPress={onPress}
        color="rgba(0,0,0,0)"
        style={{elevation: 0}}
      />
    </LinearGradient>
  );
}
export default StyledButton;
