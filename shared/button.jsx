import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 0,
        paddingVertical: 20,
        backgroundColor: "#ceff00",
    },
    text: {
        color: "#121212",
        fontFamily: "rhd-bold",
        fontSize: 16,
        textAlign: "center",
    },
});
