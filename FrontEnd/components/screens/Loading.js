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
      <Text style={TextStyles.general}>Luktelėkite, programėlė tuoj pat pasileis</Text>
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
