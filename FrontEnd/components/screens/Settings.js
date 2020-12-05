import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation }) {

  ////////////////////BACK-END/////////////////////////

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
          <Image style={{width: 50, height: 50}}source={require("../../assets/raster/user.png")}/>
          <Text style={TextStyles.general}> Vartotojo vardas </Text>
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
});
