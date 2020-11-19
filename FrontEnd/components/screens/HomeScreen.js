import React from "react";
import { Text, Button, View, StyleSheet, Image } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../Header/MyHeader";
import TextStyles  from "../text/Text";
import Icon from "../images/Icon";

export default function ({ navigation }) {
  return (
    <Background>
      <MyHeader/>
      <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
        <Text style={TextStyles.general}>Kur keliausite šiandien?</Text>
        <View style={styles.bottomContainer}>
        <Icon/>
          <View style={{ marginBottom: 10 }}>
            <StyledButton onPress={() => navigation.navigate("Test")}>Registruotis</StyledButton>
          </View>
          <View style={{ marginBottom: 40 }}>
            <StyledButton>Prisijunk su Facebook</StyledButton>
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
