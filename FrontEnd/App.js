import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/HomeScreen";
import TestScreen from "./components/screens/TestScreen";
import Settings   from "./components/screens/Settings";

const Stack = createStackNavigator();
//weather data
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "17902ac70dmsh670c6ec80cc13c7p19abf5jsna9e0eb240c8d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
	console.log(JSON.stringify( response.body));
})
.catch(err => {
	console.error(err);
});
//==========

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
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        {/*Screens list end here */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
