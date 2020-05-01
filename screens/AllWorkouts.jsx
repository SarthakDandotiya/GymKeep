import React, { useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    Image,
    FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import { WorkoutsContext } from "../WorkoutsContext";
import TouchableWorkoutListItem from "../shared/workoutItem";

export default function AllWorkouts({ navigation }) {
    const [workouts, setWorkouts] = useContext(WorkoutsContext);

    const longPressHandler = (timeStamp) => {
        setWorkouts((oldWorkouts) => {
            return oldWorkouts.filter(
                (workout) => workout.startedAt != timeStamp
            );
        });
    };

    return (
        <View style={globalStyles.alternateContainer}>
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <View
                style={{
                    paddingBottom: 8,
                    marginBottom: 8,
                }}
            >
                <TouchableHighlight
                    style={{
                        width: 20,
                        paddingVertical: 5,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require("../assets/arrow.png")}
                        style={globalStyles.icon}
                    />
                </TouchableHighlight>
                <View style={{ marginTop: 64 }}>
                    <Text style={globalStyles.heading}>All Workouts</Text>
                </View>
            </View>
            {/* List */}
            <FlatList
                data={workouts}
                keyExtractor={(item) => item.startedAt.toString()}
                renderItem={({ item }) => (
                    <TouchableWorkoutListItem
                        name={item.name}
                        startedAt={item.startedAt}
                        exercises={item.exercises}
                        navigation={navigation}
                        longPressHandler={longPressHandler}
                    />
                )}
            />
        </View>
    );
}
