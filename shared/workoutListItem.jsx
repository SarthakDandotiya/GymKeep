import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

export default function TouchableWorkoutListItem({
    name,
    startedAt,
    navigation,
    exercises,
    longPressHandler,
}) {
    let d = new Date(startedAt);
    let formattedDate =
        d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    return (
        <TouchableHighlight
            onPress={() =>
                navigation.navigate("CompletedWorkout", {
                    name,
                    formattedDate,
                    exercises,
                })
            }
            onLongPress={() => longPressHandler(startedAt)}
            style={{ marginVertical: 8 }}
        >
            <View style={styles.item}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
        </TouchableHighlight>
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
        paddingRight: 16,
    },
    name: {
        fontFamily: "rhd-regular",
        fontSize: 16,
        color: "#ffffff",
        maxWidth: 220,
    },
    date: {
        fontFamily: "rhd-regular",
        fontSize: 16,
        color: "#555555",
    },
});
