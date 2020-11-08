import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App({ style, children }) {
  const mergedStyle = Object.assign(
    {
      flex: 1,
      paddingTop: 50, // make notch size
    },
    style
  );
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      // Background Linear Gradient
      colors={["rgb(134, 243, 251)", "rgb(53,112,197)"]}
      style={mergedStyle}
    >
      {children}
    </LinearGradient>
  );
}
