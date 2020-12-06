﻿import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/QuestionButton";
import Icon from "../../images/Icon";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ({ navigation }) {
  /////////////////////BACK-END/////////////////////////////////////////

  let [value, setValue] = useState("");

  let saveQuestion = async (val) => {
    let token = await AsyncStorage.getItem("token");
    setValue(val);
    fetch("http://orutis.live/quiz?q=2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        value: value,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        navigation.navigate("Question3");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////////////////////////////////////////////////////
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Kur jums labiau patinka leisti laiką?</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{  paddingTop: 100, paddingBottom: 20 }}>
          <StyledButton onPress={() => saveQuestion(true)}>
            <Text style={TextStyles.general}> Lauke {"\n"}</Text>
            <FontAwesome5 name="door-open" size={40} color="black" />
          </StyledButton>
        </View>

        <View style={{ paddingTop: 100, paddingBottom: 20 }}>
          <StyledButton onPress={() => saveQuestion(false)}>
            <Text style={TextStyles.general}> Viduje {"\n"}</Text>
            <FontAwesome5 name="home" size={40} color="black" />
          </StyledButton>
        </View>
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
