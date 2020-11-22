import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles  from "../styles/Text";
import InputStyles from "../styles/Input"
import MyHeader from "../header/MyHeader";
import { TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";


export default function ({ navigation }) {
  return (
    <Background style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <MyHeader navigation={navigation}/>
      <Text style={[TextStyles.general, {marginTop: 40}]}>Registracija</Text>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 60}}>
      <TextInput 
        placeholder="Vartotojo vardas"
        style={InputStyles.inputField}
      />
      <TextInput 
        placeholder="El. Paštas"
        style={InputStyles.inputField}
      />
      <TextInput
        secureTextEntry={true} 
        placeholder="Slaptažodis"
        style={InputStyles.inputField}
      />
      </View>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
        <StyledButton style={{marginTop: 20}}>Registruotis</StyledButton>
        <Text style={styles.privacy}>Registruodamiesi sutinkate su mūsų privatumo politika</Text>
      </View>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
        <Icon/>
        <Text style={{fontWeight: "bold", color: 'black', fontSize: 20}}>Jau turi paskyrą?</Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  privacy: {
    fontWeight: "bold",
    color: 'blue',
    textAlign: "center",
    width: 225,
    marginTop: 20,
    fontSize: 17
  }
});