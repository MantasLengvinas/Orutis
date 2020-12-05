import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";

export default function ({ navigation }) {
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Pamiršai slaptažodį?</Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}>
        <TextInput placeholder="El. Paštas" style={InputStyles.inputField} />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <StyledButton onPress={() => navigation.navigate("Confirmation")} style={{ marginTop: 20 }}>
          Siųsti
        </StyledButton>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Icon />
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
