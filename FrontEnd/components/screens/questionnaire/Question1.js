import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/StyledButton";
import Icon from "../../images/Icon";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ({ navigation }) {
    return (
        <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <MyHeader navigation={navigation} goBack={true} />
            <Text style={[TextStyles.general, { marginTop: 40 }]}>Koks oras jums patinka labiausiai?</Text>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={TextStyles.general}> šiltas  </Text>
                <FontAwesome5 name="temperature-high" size={24} color="black" />
                </View>
                <View>
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
