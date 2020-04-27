import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Options() {
    return (
        <View style={globalStyles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <Text style={globalStyles.text}>Options Screen</Text>
        </View>
    );
}
