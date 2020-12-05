import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

export default function App({ children, style }) {
  
  if(style===undefined)
    style = {flex:1, paddingTop: Constants.statusBarHeight}
    else
    style = Object.assign(style,{flex:1, paddingTop: Constants.statusBarHeight});
  
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      // Background Linear Gradient
      colors={["rgb(134, 243, 251)", "rgb(53,112,197)"]}
       style={
         
         style// make notch size
       }
    >
      
      {children}
      
    </LinearGradient>
  );
}
