import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LoginButtonTop from "../buttons/LoginButtonTop";
import Constans from "expo-constants";

export default function ({ navigation, goBack }) {
  let arrow = null;
  if (goBack) {
    arrow = (
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 5 }}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>{arrow}</View>
    </View>
  );
}
