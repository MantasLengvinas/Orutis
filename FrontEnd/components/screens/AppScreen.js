import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles from "../styles/Text";
import LoginButton from "../buttons/LoginButton";
import Icon from "../images/Icon";
import LoginButtonTop from "../buttons/LoginButtonTop";

export default function ({ navigation }) {
  return (
    <Background>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
        <Text style={TextStyles.general}>Zdarova</Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
