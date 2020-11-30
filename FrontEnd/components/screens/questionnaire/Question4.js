import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import MyHeader from "../../header/MyHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/QuestionButton";
import Icon from "../../images/Icon";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ({ navigation }) {
    return (
        <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <MyHeader navigation={navigation} goBack={true} />
            <Text style={[TextStyles.general, { marginTop: 40 }]}>Ar keliaujate su gyvūnais?</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 65, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={() => navigation.navigate("Question5")} >
                    <Text style={TextStyles.general}> Taip </Text>
                    <MaterialCommunityIcons name="dog-side" size={40} color="black" />    
                    </StyledButton>
                </View>
            
                
                <View style={{ paddingRight: 65, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={() => navigation.navigate("Question5")} >
                    <Text style={TextStyles.general}> Ne </Text>
                    <MaterialCommunityIcons name="walk" size={45} color="black" />
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
        color: "blue",
        textAlign: "center",
        width: 225,
        marginTop: 20,
        fontSize: 17,
    },
});