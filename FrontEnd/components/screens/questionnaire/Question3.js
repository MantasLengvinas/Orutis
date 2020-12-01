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

    /////////////////////BACK-END/////////////////////////////////////////

    let [value, setValue] = useState('')

    let saveQuestion = (val) => {
        setValue(val);
        fetch("http://orutis.live/quiz?q=3", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": value
            })
        })
        .then(res => res.json())
        .then(async (data) => {
            console.log(data);
            navigation.navigate("Question4")
        })
        .catch(err => {
            console.log(err);
        })
    }

/////////////////////BACK-END//////////////////////////////////////////
    return (
        <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <MyHeader navigation={navigation} goBack={true} />
            <Text style={[TextStyles.general, { marginTop: 40 }]}>Ar jums patinka aktyvus laisvalaikis?</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 65, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={saveQuestion(true)} >
                    <Text style={TextStyles.general}> Taip <br/></Text>
                    <MaterialCommunityIcons name="run-fast" size={40} color="black" />    
                    </StyledButton>
                </View>
            
                
                <View style={{ paddingRight: 65, paddingTop: 100, paddingBottom: 20 }}>
                    <StyledButton onPress={saveQuestion(false)} >
                    <Text style={TextStyles.general}> Ne <br/></Text>
                    <MaterialCommunityIcons name="human-male" size={45} color="black" />
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