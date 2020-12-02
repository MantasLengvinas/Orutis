import React, {useEffect, useState} from "react";
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

const Stack = createStackNavigator();
//weather data

// fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "17902ac70dmsh670c6ec80cc13c7p19abf5jsna9e0eb240c8d",
//     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     if(response.body==undefined) {global.weather="noshit"; throw "no body";};
//     return response.body.getReader();
//   })
//   .then((reader) =>
//     reader
//       .read()
//       .then(({ done, value }) => {
//         let data = "";
//         for (let i = 0; i < value.length; i++) {
//           data += String.fromCharCode(value[i]);
//         }
//         data = data.substring(5, data.length - 1);
//         global.weather = data;
//       })

//   )
//   .catch((err) => {
//     console.error(err);
//   });

/*fetch("http://api.weatherunlocked.com/api/forecast/51.50,-0.12?app_id=b188c162&app_key=62fd3d2f66c74f7b9d1064538c497646")
  .then((response) => {
    console.log(response);
    if (response.body == undefined) {
      global.weather = "noshit";
      throw "no body";
    }
    return response.body.getReader();
    
  })
  .then((reader) => {
    let data = "";
    rec();
    function rec() {
      console.log("k");
      reader.read().then(({ done, value }) => {
        if(done)
        {
          global.weather = data;
          console.log(JSON.parse(data));
          return;
        }
        
        for (let i = 0; i < value.length; i++) {
          data += String.fromCharCode(value[i]);
        }
        return rec();
      });
    }

  })
  .catch((err) => {
    console.error(err);
  });*/

//==========

export default function App() {

  //////////////BACK-END//////////////////////
  let [isSignedUp, signUp] = useState(null)
  // AsyncStorage.clear();

  let Authorize = async () => {
    global.token = await AsyncStorage.getItem('token')
    if(token){
      signUp(true)
    }
    else{
      signUp(false)
    }
  }

  useEffect(() => {
    Authorize();

    return () => {
      console.log("Authorization success");
    }

  }, [])

  global.weather="waiting";
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {
          isSignedUp == null ? (
            <Stack.Screen name="Loading" component={Loading} />
          ) : isSignedUp == true ? (<> 
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Question1" component={Question1} />
            <Stack.Screen name="Question2" component={Question2} />
            <Stack.Screen name="Question3" component={Question3} />
            <Stack.Screen name="Question4" component={Question4} />
            <Stack.Screen name="Question5" component={Question5} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="GoToStart" component={GoToStart} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
          </>) : (<>
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
            <Stack.Screen name="GoToStart" component={GoToStart} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
          </>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
