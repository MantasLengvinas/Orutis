import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/LoginButton";
import Icon from "../../images/Icon";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ({ navigation }) {
    return (
        <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <MyHeader navigation={navigation} goBack={true} />
            <Text style={[TextStyles.general, { marginTop: 40 }]}>Dėkojame už atsakymus!</Text>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20, paddingTop: 110 }}>
            <StyledButton onPress={() => navigation.navigate("")} style={{ marginTop: 20 }}>Pradėti kelionę</StyledButton>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20, paddingTop: 50 }}>
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