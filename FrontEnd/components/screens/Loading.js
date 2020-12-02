import React, {useEffect} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Text, Button, View, StyleSheet } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles from "../styles/Text";
import LoginButton from "../buttons/LoginButton";
import Icon from "../images/Icon";
import LoginButtonTop from "../buttons/LoginButtonTop";


export default function ({ navigation }) {

  let Authorize = async () => {
    global.token = await AsyncStorage.getItem('token')
    if(token){
      navigation.reset({
        index: 0,
        routes:[{name:"MainMenu"}]
      });
      //navigation.navigate("MainMenu")
    }
    else{
      navigation.reset({
        index: 0,
        routes:[{name:"Home"}]
      });
    }
  }
  Authorize();
  
  

    

  return (
    <Background>
      
      <Text style={TextStyles.general}>Luktelėkite, programėlė tuoj pat pasileis</Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    justifyContent:'center',

  },
});
