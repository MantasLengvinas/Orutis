import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

import TextStyles from "../styles/Text";

function LoginButton({ children, iconName }) {
    let icon = <></>;
    switch(iconName){
        case "Facebook": 
            icon = <Entypo name="facebook" size={24} color="black" />;
            break;
    }
    return (
        <TouchableOpacity style={styles.button}>
            {icon}
            <Text style={TextStyles.button}>{children}</Text>
        </TouchableOpacity>
    );
}
export default LoginButton;

const styles = StyleSheet.create({
    button: {
        paddingLeft: 30,
        backgroundColor: "#7C92BF",
        borderRadius: 25,
        borderColor: "grey",
        borderWidth: 0.8,
        width: 320,
        height: 50,
        justifyContent: 'center',
    },
});