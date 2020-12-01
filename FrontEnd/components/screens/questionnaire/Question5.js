import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/QuestionButton5";
import Icon from "../../images/Icon";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ({ navigation }) {
    return (
        <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <MyHeader navigation={navigation} goBack={true} />
            <Text style={[TextStyles.general, { marginTop: 40 }]}>Kokio tipo paslaugoms teikiate pirmenybę?</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 15, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={() => navigation.navigate("GoToStart")} >
                    <Text style={styles.general}> Mokamoms <br/></Text>
                    <MaterialCommunityIcons name="cash" size={40} color="black" />    
                    </StyledButton>
                </View>
            
                
                <View style={{ paddingRight: 65, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={() => navigation.navigate("GoToStart")} >
                    <Text style={styles.general}> Nemokamoms <br/></Text>
                    <MaterialCommunityIcons name="cash-refund" size={40} color="black" />
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
        color: "black",
        textAlign: "center",
        width: 225,
        marginTop: 20,
        fontSize: 17,
    },
    general: {
        textAlign: "center",
        color: "#3A3434",
        fontWeight: "700",
        fontSize: 21,
      }
});