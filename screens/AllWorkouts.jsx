import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { globalStyles } from "../styles/global";

export default function AllWorkouts() {
    return (
        <View style={globalStyles.container}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <Text style={globalStyles.text}>All Workouts Screen</Text>
        </View>
    );
}
