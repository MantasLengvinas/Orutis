import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

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
import MainMenu from "./components/screens/MainMenu";
import Loading from "./components/screens/Loading";
import Outfit from "./components/screens/Outfit";
import Destinations from "./components/screens/Destinations";

const Stack = createStackNavigator();

export default function App() {
  //////////////BACK-END//////////////////////
  // let [isSignedUp, signUp] = useState(null);
  // // AsyncStorage.clear();

  // let Authorize = async () => {
  //   global.token = await AsyncStorage.getItem("token");
  //   if (token) {
  //     signUp(true);
  //   } else {
  //     signUp(false);
  //   }
  // };

  // useEffect(() => {
  //   Authorize();

  //   return () => {
  //     console.log("Authorization success");
  //   };
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Question5" component={Question5} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Outfit" component={Outfit} />
        <Stack.Screen name="GoToStart" component={GoToStart} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Destinations" component={Destinations} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
