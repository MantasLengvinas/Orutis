import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import TextStyles from "../styles/Text";

function LoginButton({ children }) {
    return (
        <TouchableOpacity style={styles.button}>
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