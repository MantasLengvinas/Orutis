import React from "react";
import { View, Text, Button } from "react-native";

import Background from "../background/Background";
import MyHeader from "../header/MyHeader";

export default function ({ navigation }) {
  return (
    <Background style={{ alignItems: "center", justifyContent: "center" }}>
      <MyHeader navigation={navigation}/>
      <Text>Cringe</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </Background>
  );
}
