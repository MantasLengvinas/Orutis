import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LoginButtonTop from "../buttons/LoginButtonTop";

export default function ({ navigation ,goBack }) {
  if (goBack) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 5 }}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ margin: 5 }}>
          <AntDesign name="setting" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ margin: 5 }}>
          <AntDesign name="setting" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}