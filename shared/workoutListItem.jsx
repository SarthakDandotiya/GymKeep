import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function TouchableWorkoutListItem({ name, date, navigation }) {
    let d = new Date(date);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("CompletedWorkout")}
            style={{ marginVertical: 8 }}
        >
            <View style={styles.item}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.date}>
                    {d.getDate() +
                        "/" +
                        (d.getMonth() + 1) +
                        "/" +
                        d.getFullYear()}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#222222",
    },
    name: {
        fontFamily: "rhd-regular",
        fontSize: 16,
        color: "#ffffff",
    },
    date: {
        fontFamily: "rhd-regular",
        fontSize: 16,
        color: "#555555",
    },
});
