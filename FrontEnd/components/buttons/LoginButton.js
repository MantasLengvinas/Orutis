import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from '@expo/vector-icons'; 

import TextStyles from "../styles/Text";

function LoginButton({ children, iconName }) {
    let icon = <></>;
    switch(iconName){
        case "Facebook": 
            icon = <Entypo name="facebook" size={24} color="black" />;
            break;
        case "Google": 
            icon = <AntDesign name="google" size={24} color="black" />;
            break;
    }
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={TextStyles.button}>{icon} {children}</Text>
        </TouchableOpacity>
    );
}
export default LoginButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7C92BF",
        borderRadius: 25,
        borderColor: "grey",
        borderWidth: 0.8,
        width: 320,
        height: 50,
        justifyContent: 'center',
    },
});