import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Dimensions } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import BackHeader from "../header/BackHeader";
import { ScrollView } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";

export default function ({ navigation }) {
  /////////////////////BACK-END//////////////////////////////////////////

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  let sendCred = () => {
    fetch("http://orutis.live/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        try {
          if (data.error) {
            setError(data.error);
          }
          await AsyncStorage.setItem("token", data.token);
          navigation.navigate("Main");
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //console.log(Dimensions.get("window").height);
  /////////////////////BACK-END/////////////////////////////////////////
  return (
    
      <Background >
          <ScrollView>
          <BackHeader navigation={navigation} goBack={true} />
          <Text style={[TextStyles.general, { marginTop: 40 }]}>Registracija</Text>
          <Text style={{ textAlign: "center", color: "red", marginTop: 20, fontSize: 20 }}>{error}</Text>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}>
            <TextInput placeholder="Vartotojo vardas" onChangeText={(text) => setUsername(text)} value={username} style={InputStyles.inputField} />
            <TextInput placeholder="El. Paštas" value={email} onChangeText={(text) => setEmail(text)} style={InputStyles.inputField} />
            <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholder="Slaptažodis" style={InputStyles.inputField} />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
            <StyledButton onPress={() => sendCred()} style={{ marginTop: 20 }}>
              Registruotis
            </StyledButton>
            <Text style={styles.privacy}>Registruodamiesi sutinkate su mūsų privatumo politika</Text>
          </View>
        
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
          <Icon />
          <Text onPress={() => navigation.navigate("Login")} style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
            Jau turi paskyrą?
          </Text>
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
});
