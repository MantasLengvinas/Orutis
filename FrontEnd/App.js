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
import ConfirmationPassword from "./components/screens/ConfirmationPassword";
import ConfirmationQuestionnaire from "./components/screens/ConfirmationQuestionnaire";
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
import MoreInfo from "./components/screens/MoreInfo";
import MainChange from "./components/screens/questionnaireChange/MainChange";
import Question1Change from "./components/screens/questionnaireChange/Question1Change";
import Question2Change from "./components/screens/questionnaireChange/Question2Change";
import Question3Change from "./components/screens/questionnaireChange/Question3Change";
import Question4Change from "./components/screens/questionnaireChange/Question4Change";
import Question5Change from "./components/screens/questionnaireChange/Question5Change";
import GoToStartChange from "./components/screens/questionnaireChange/GoToStartChange";

const Stack = createStackNavigator();

export default function App() {

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
        <Stack.Screen name="ConfirmationPassword" component={ConfirmationPassword} />
        <Stack.Screen name="ConfirmationQuestionnaire" component={ConfirmationQuestionnaire} />
        <Stack.Screen name="Destinations" component={Destinations} />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
        <Stack.Screen name="MainChange" component={MainChange} />
        <Stack.Screen name="Question1Change" component={Question1Change} />
        <Stack.Screen name="Question2Change" component={Question2Change} />
        <Stack.Screen name="Question3Change" component={Question3Change} />
        <Stack.Screen name="Question4Change" component={Question4Change} />
        <Stack.Screen name="Question5Change" component={Question5Change} />
        <Stack.Screen name="GoToStartChange" component={GoToStartChange} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
