import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/HomeScreen";
import Settings from "./components/screens/Settings";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";
import ForgotPassword from "./components/screens/ForgotPassword";
import Confirmation from "./components/screens/Confirmation";
import Main from "./components/screens/questionnaire/Main";
import Question1 from "./components/screens/questionnaire/Question1";
import Question2 from "./components/screens/questionnaire/Question2";
import Question3 from "./components/screens/questionnaire/Question3";
import Question4 from "./components/screens/questionnaire/Question4";
import Question5 from "./components/screens/questionnaire/Question5";
import GoToStart from "./components/screens/questionnaire/GoToStart";

const Stack = createStackNavigator();
//weather data
/*fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Vilnius%2Clt&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "17902ac70dmsh670c6ec80cc13c7p19abf5jsna9e0eb240c8d",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
  .then((response) => {
    return response.body.getReader();
  })
  .then((reader) =>
    reader.read().then(({ done, value }) => {
      let data = "";
      for (let i = 0; i < value.length; i++) {
        data += String.fromCharCode(value[i]);
      }
      data=data.substring(5,data.length-1);
      console.log(data);
    })
  )
  .catch((err) => {
    console.error(err);
  });*/

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
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Question5" component={Question5} />
        <Stack.Screen name="GoToStart" component={GoToStart} />
        {/*Screens list end here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
