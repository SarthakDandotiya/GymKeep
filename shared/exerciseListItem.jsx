import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function ExerciseListItem({
    exercise,
    startedAt,
    longPressHandler,
}) {
    return (
        <TouchableHighlight onLongPress={() => longPressHandler(startedAt)}>
            <View style={styles.itemContainer}>
                <View style={styles.left}>
                    <Text style={globalStyles.text}>{exercise.name}</Text>
                    <Text style={globalStyles.text777}>
                        {exercise.weight === 0 || exercise.weight === null
                            ? "Body Weight"
                            : exercise.weight + " Kg"}
                    </Text>
                </View>
                <Text style={styles.counts}>
                    {exercise.sets + " x " + exercise.reps}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: "#222222",
        marginVertical: 8,
    },
    left: {
        paddingRight: 16,
        maxWidth: 220,
    },
    counts: {
        flex: 0,
        color: "#ffffff",
        fontSize: 32,
        fontFamily: "rhd-regular",
    },
});
