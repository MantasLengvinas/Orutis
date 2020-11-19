import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/HomeScreen";
import RegisterScreen from "./components/screens/RegisterScreen";

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
        {/*Screens list end here */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
