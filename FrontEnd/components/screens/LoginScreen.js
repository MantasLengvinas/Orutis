import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Background from "../background/Background";
import TextStyles  from "../styles/Text";
import InputStyles from "../styles/Input"
import MyHeader from "../header/MyHeader";
import { TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";


export default function ({ navigation }) {

/////////////////////BACK-END/////////////////////////////////////////
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let sendCred = () => {
      fetch("https://orutis.herokuapp.com/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      })
      .then(res => res.json())
      .then(async (data) => {
          console.log(data);
          try {
            await AsyncStorage.setItem("token", data.token)
          }
          catch(err) {
            console.log(err);
          }
      })
      .catch(err => {
        console.log(err);
      })
  }

  /////////////////////BACK-END//////////////////////////////////////////
  return (
    <Background style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <MyHeader navigation={navigation} goBack={true}/>
      <Text style={[TextStyles.general, {marginTop: 40}]}>Prisijunkite</Text>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 60}}>
       <TextInput 
        placeholder="El. Paštas"
        value = {email}
        style={InputStyles.inputField}
        onChangeText = {(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true} 
        placeholder="Slaptažodis"
        value = {password}
        style={InputStyles.inputField}
        onChangeText = {(text) => setPassword(text)}
      />
      </View>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
        <StyledButton onPress={sendCred} style={{marginTop: 20}}>Prisijungti</StyledButton>
              <Text onPress={() => navigation.navigate("ForgotPassword")} style={styles.privacy}>Pamiršote slaptažodį?</Text>
      </View>
      <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
        <Icon/>
              <Text onPress={() => navigation.navigate("Register")} style={{fontWeight: "bold", color: 'black', fontSize: 20}}>Neturi paskyros?</Text>
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