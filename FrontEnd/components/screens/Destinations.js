import React from "react";
import { View, Text, Button, StyleSheet, Linking, Image, Dimensions } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";
import FakeAPI from "../data/VirtualObjectAPI";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

function Direction(param, index, navigation) {
  const icons = [
    param.filterBy.outside ? <FontAwesome5 name="door-open" size={40} color="black" /> : <FontAwesome5 name="home" size={40} color="black" />,
    <View style={{ marginLeft: 20 }} />,
    param.filterBy.warm ? <FontAwesome5 name="temperature-high" size={40} color="black" /> : <FontAwesome5 name="temperature-low" size={40} color="black" />,
    <View style={{ marginLeft: 7 }} />,
    param.filterBy.animals ? <MaterialCommunityIcons name="dog-side" size={40} color="black" /> : <Foundation name="no-dogs" size={45} color="black" />,
    <View style={{ marginLeft: 7 }} />,
    param.filterBy.active ? <MaterialCommunityIcons name="run-fast" size={40} color="black" /> : <MaterialCommunityIcons name="human-male" size={45} color="black" />,
    <View style={{ marginLeft: 15 }} />,
    param.filterBy.mokama ? <MaterialCommunityIcons name="cash" size={40} color="black" /> : <MaterialCommunityIcons name="cash-refund" size={40} color="black" />,
  ];

  return (
    <View key={index}>
      <Text style={[TextStyles.general, { marginBottom: 20, marginTop: 20 }]}>{param.title}</Text>

      <Image style={styles.icon} source={{ uri: param.image }} />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>{icons}</View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <StyledButton onPress={()=>navigation.navigate("MoreInfo",{param:param,icons:icons})}>Daugiau info</StyledButton>
      </View>
      <View style={{ paddingRight: 15, paddingLeft: 15 }}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
      </View>
    </View>
  );
}

export default function ({ navigation }) {
  //console.log(FakeAPI);

  const Objektai = FakeAPI.map((param, index) => Direction(param, index, navigation));

  return (
    <Background>
      <ScrollView>
        <MyHeader navigation={navigation} goBack={true} />
        {Objektai}
      </ScrollView>
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
  icon: {
    //width: ,
    height: Dimensions.get('window').width*9/16,
    alignContent: "center",
    justifyContent: "center",
  },
});
