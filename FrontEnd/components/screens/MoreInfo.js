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
import { Foundation } from '@expo/vector-icons'; 

export default function ({ navigation, route }) {
  const param = route.params.param;
  const icons = route.params.icons;

  return (
    <Background>
      <ScrollView>
        <MyHeader navigation={navigation} goBack={true} />
        <View>
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
            <Text style={[TextStyles.general, { marginBottom: 20, marginTop: 20 }]}>{param.description}</Text>
            <StyledButton onPress={() => Linking.openURL(param.onClick)}>Atidaryti maps</StyledButton>
          </View>
        </View>
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
    height: (Dimensions.get("window").width * 9) / 16,
    alignContent: "center",
    justifyContent: "center",
  },
});
