import React from "react";
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList } from "react-native-gesture-handler";
import ExerciseListItem from "../shared/exerciseListItem";

export default function CompletedWorkout({ navigation, route }) {
    return (
        <View style={globalStyles.alternateContainer}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            {/* Header */}
            <View
                style={{
                    paddingBottom: 8,
                    marginBottom: 8,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 20,
                        paddingVertical: 5,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require("../assets/cancel.png")}
                        style={globalStyles.icon}
                    />
                </TouchableOpacity>
                <View style={{ marginTop: 64 }}>
                    <Text style={globalStyles.heading}>
                        {route.params.name}
                    </Text>
                    <Text style={globalStyles.text555}>
                        {route.params.formattedDate}
                    </Text>
                </View>
            </View>
            {/* List */}
            <FlatList
                data={route.params.exercises}
                keyExtractor={(item) =>
                    item.name + item.sets.toString() + item.reps.toString()
                }
                renderItem={({ item }) => <ExerciseListItem exercise={item} />}
            />
        </View>
    );
}
