import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "../background/Background";
import TextStyles from "../styles/Text";
import Icon from "../images/Icon";
import MyHeader from "../header/MyHeader";
import StyledButton from "../buttons/StyledButton";
import AsyncStorage from "@react-native-community/async-storage";

export default function ({ navigation }) {

  AsyncStorage.clear();

  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Jūsų pomėgiai sėkmingai atnaujinti! </Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Icon />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
      <StyledButton onPress={() => navigation.navigate("MainMenu")}>Grįžti</StyledButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  privacy: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    width: 225,
    marginTop: 20,
    fontSize: 17,
  },
});