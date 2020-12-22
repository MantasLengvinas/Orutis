import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LoginButtonTop from "../buttons/LoginButtonTop";
import Constans from "expo-constants";

export default function ({ navigation, goBack, noSetting }) {
  let settin = null;
  if (noSetting === undefined) {
    settin = (
      <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ margin: 5 }}>
        <AntDesign name="setting" size={32} color="black" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flexDirection: "row-reverse", justifyContent: "space-between" }}>
      <View>{settin}</View>
    </View>
  );
}
