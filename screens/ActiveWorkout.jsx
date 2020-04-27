import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { globalStyles } from "../styles/global";

export default function ActiveWorkout() {
    return (
        <View style={globalStyles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <Text style={globalStyles.text}>ActiveWorkout Screen</Text>
        </View>
    );
}
