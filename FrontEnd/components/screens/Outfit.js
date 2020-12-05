import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Unorderedlist from 'react-native-unordered-list';
import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation }) {

  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true}/>
        <Text style={[TextStyles.general, {marginTop: 30}]}> Aprangos pasiūlymai </Text>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
            <Unorderedlist><Text>Lapas</Text></Unorderedlist>
            <Unorderedlist><Text>Alus</Text></Unorderedlist>
            <Unorderedlist><Text>Belekas</Text></Unorderedlist>
        </View>
    </Background>
  );
}
