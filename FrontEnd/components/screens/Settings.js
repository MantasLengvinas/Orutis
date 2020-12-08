import AsyncStorage from "@react-native-community/async-storage";
import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Unorderedlist from 'react-native-unordered-list';

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation }) {

  ////////////////////BACK-END/////////////////////////

  let getUsername = () => {
    fetch("http://orutis.live/getUsername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": global.token
      }
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          global.username = data.username;
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if(!global.username){
    getUsername();
  }

  let logout = () => {
    try {
      AsyncStorage.clear();
      navigation.navigate("Home")
      return true;
    }
    catch(e) {
      console.log(e);
      return false;
    }

  }

  ////////////////////BACK-END////////////////////////
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true}/>
      <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ marginTop: 45, marginBottom: 50, justifyContent: 'center', alignItems: 'center',}}>
          <Image style={styles.image} source={require("../../assets/raster/user.png")}/>
          <Text style={TextStyles.general}> {global.username} </Text>
          <Text style={TextStyles.big}> Vartotojo vardas </Text>
        </View>
        <View>
          <Unorderedlist style={TextStyles.general}><Text style={TextStyles.generalList}> pastas@email.com </Text></Unorderedlist>
          <Unorderedlist style={TextStyles.general}><Text style={TextStyles.generalList}> +37065432109 </Text></Unorderedlist>
          <Unorderedlist style={TextStyles.general}><Text style={TextStyles.generalList}> Vilnius </Text></Unorderedlist>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ marginBottom: 40 }}>
            <StyledButton onPress={() => navigation.navigate("MainMenu")}> Menu </StyledButton>
            <View style={{ marginBottom: 10 }}></View>
            <StyledButton onPress={() => navigation.navigate("Question1")}> Keisti pomėgius </StyledButton>
            <View style={{ marginBottom: 10 }}></View>
            <StyledButton onPress={() => logout()}> Atsijungti </StyledButton>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: 110, 
    height: 110,
    borderRadius: 80,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#3A3434",
  }
});
