import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";
import LoginButton from "../buttons/LoginButton"
import Icon from "../images/Icon";

export default function ({ navigation }) {
  return (
    <Background>
      <MyHeader/>
      <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
        <Text style={TextStyles.general}>Kur keliausite šiandien?</Text>
        <View style={styles.bottomContainer}>
          <Icon />
          <View style={{ marginBottom: 10 }}>
            <StyledButton onPress={() => navigation.navigate("Test")}>Registruotis</StyledButton>
          </View>
          <View style={{ marginBottom: 40 }}>
            <LoginButton iconName="Facebook">Prisijunk su Facebook</LoginButton>
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
    alignItems: "center"
  },
});
