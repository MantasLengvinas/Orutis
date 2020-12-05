import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/StyledButton";
import Icon from "../../images/Icon";

export default function ({ navigation }) {
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginLeft: 5, marginRight: 5 }}>
        <Text style={[TextStyles.general, { marginTop: 40 }]}>Leiskite mums sužinoti daugiau apie Jus! </Text>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}></View>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
          <StyledButton onPress={() => navigation.navigate("Question1")} style={{ marginTop: 20 }}>
            Pradėti
          </StyledButton>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
          <Icon />
        </View>
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
