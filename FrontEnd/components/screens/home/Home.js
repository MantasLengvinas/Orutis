import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import Background from "../../background/Background";
import StyledButton from "../../buttons/StyledButton";
export default function ({ navigation }) {
  return (
    <Background style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Home Page</Text>
      <View style= {styles.bottomContainer}>
        <View style={{marginBottom: 10}}>
          <StyledButton
            title="Registruotis"
            onPress={() => navigation.navigate("Test")}
          />
        </View>
        <View style={{marginBottom: 40}}>
          <StyledButton 
            title= "Prisijunk su Facebook"
          />
          </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create ({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});