import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { Entypo, AntDesign } from '@expo/vector-icons'; 

import TextStyles from "../styles/Text";

function LoginButtonTop({ onPress, children}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.button}
            >
            <Text style={styles.login}><AntDesign name="login" size={20} color="black"/> {children}</Text>
        </TouchableOpacity>
    );
}
export default LoginButtonTop;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7C92BF",
        borderRadius: 25,
        borderColor: "grey",
        borderWidth: 0.8,
        width: 150,
        height: 40,
        justifyContent: 'center',
        marginTop: 5
    },
    login: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 2,
        fontSize: 17
    }
});