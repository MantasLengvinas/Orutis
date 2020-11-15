import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ({ navigation }) {
  if (navigation) {
    return (
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 5 }}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ margin: 5 }}>
          <AntDesign name="setting" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return <></>;
  }
}
