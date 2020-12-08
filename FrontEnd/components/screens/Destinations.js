import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";
import AsyncStorage from "@react-native-community/async-storage";

export default function ({ navigation }) {

  AsyncStorage.clear();

  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>MO Muziejus </Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}></View>

      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Icon />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <StyledButton onPress={() => navigation.navigate("")} style={{ marginTop: 20 }}>
          MO muziejus
        </StyledButton>
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
