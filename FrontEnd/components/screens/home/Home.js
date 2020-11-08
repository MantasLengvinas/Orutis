import React from "react";
import { View, Text, Button } from "react-native";
import Background from "../../background/Background";

export default function ({ navigation }) {
  return (
    <Background style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Home Page</Text>
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate("Test")}
      />
    </Background>
  );
}
