import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default function App({ children }) {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      // Background Linear Gradient
      colors={["rgb(134, 243, 251)", "rgb(53,112,197)"]}
      style={{
        flex: 1, 
        paddingTop:  Constants.statusBarHeight, // make notch size
      }}
    >
      {children}
    </LinearGradient>
  );
}
