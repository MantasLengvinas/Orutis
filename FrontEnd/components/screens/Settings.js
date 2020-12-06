import AsyncStorage from "@react-native-community/async-storage";
import React, {useState} from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation }) {

  ////////////////////BACK-END/////////////////////////

  let [username, setUsername] = useState("");

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
          setUsername(data.username)
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getUsername();

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
        <View style={{ marginTop: 45 }}>
          <Image style={styles.image} source={require("../../assets/raster/user.png")}/>
          <Text style={TextStyles.general}> {username} </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ marginBottom: 40 }}>
            <StyledButton onPress={() => logout()}> Atsijungti </StyledButton>
            <View style={{ marginBottom: 15 }}></View>
            <StyledButton onPress={() => navigation.navigate("MainMenu")}> Menu </StyledButton>
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
    width: 80, 
    height: 80,
    borderRadius: 80,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#3A3434",
  }
});
