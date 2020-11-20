import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/HomeScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,     
        }}
      >
        
        {/*Screens list from here */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/*Screens list end here */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
