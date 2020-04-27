import React, { Component } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { globalStyles } from "../styles/global";

class Home extends Component {
    state = {};
    render() {
        return (
            <View style={globalStyles.container}>
                <StatusBar backgroundColor='#000000' barStyle='light-content' />
                <Text style={globalStyles.text}>Home Screen</Text>
            </View>
        );
    }
}

export default Home;
