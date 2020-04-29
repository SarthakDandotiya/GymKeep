import React, { useContext, useState } from "react";
import {
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { TouchableHighlight, ScrollView } from "react-native-gesture-handler";
import FlatButton from "../shared/button";
import TouchableWorkoutListItem from "../shared/workoutListItem";
import { WorkoutsContext } from "../WorkoutsContext";

export default function Home({ navigation }) {
    const [workouts, setWorkouts] = useContext(WorkoutsContext);
    // const [workoutName, setWorkoutName] = useState("");

    const longPressHandler = (timeStamp) => {
        setWorkouts((oldWorkouts) => {
            return oldWorkouts.filter(
                (workout) => workout.startedAt != timeStamp
            );
        });
    };

    const handleTextChange = (text) => {
        setWorkoutName(text);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <StatusBar backgroundColor='#000000' barStyle='light-content' />
                {/* Header */}
                <View style={globalStyles.homeHeader}>
                    <View>
                        <Text style={globalStyles.brand}>Gym</Text>
                        <Text style={globalStyles.brand}>Keep</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => navigation.navigate("Options")}
                    >
                        <Image
                            source={require("../assets/menu.png")}
                            // source={require("../assets/defaultUserImage.png")}
                            style={globalStyles.dp}
                        />
                    </TouchableHighlight>
                </View>
                {/* Image */}
                <Image
                    source={require("../assets/bicep.png")}
                    style={globalStyles.bicep}
                />
                {/* Content */}
                <View>
                    {/* New Workout Section */}
                    <View style={{ marginBottom: 32 }}>
                        <Text style={globalStyles.heading}>New</Text>
                        <TextInput
                            style={globalStyles.textInput}
                            placeholder='Type here to translate!'
                            onChangeText={(text) => handleTextChange(text)}
                            placeholder='Workout Name'
                            placeholderTextColor='#777777'
                        />
                        <FlatButton
                            text='Begin'
                            onPress={() => navigation.navigate("ActiveWorkout")}
                        />
                    </View>
                    {/* Previous Section */}
                    <View>
                        <View
                            style={{
                                flex: 0,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text style={globalStyles.heading}>Previous</Text>
                            <TouchableHighlight
                                onPress={() =>
                                    navigation.navigate("AllWorkouts")
                                }
                            >
                                <Text style={globalStyles.textGreen}>
                                    View All
                                </Text>
                            </TouchableHighlight>
                        </View>
                        {/* Short List */}
                        <ScrollView style={{ minHeight: 76, maxHeight: 232 }}>
                            {workouts.length < 3 ? (
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 232,
                                        backgroundColor: "#1a1a1a",
                                    }}
                                >
                                    <Text style={globalStyles.text}>
                                        You need to have atleast 3 workouts
                                    </Text>
                                    <Text style={globalStyles.text555}>
                                        Get going!
                                    </Text>
                                </View>
                            ) : (
                                workouts.slice(-3).map((item) => {
                                    return (
                                        <TouchableWorkoutListItem
                                            key={item.startedAt}
                                            name={item.name}
                                            date={item.startedAt}
                                            exercises={item.exercises}
                                            navigation={navigation}
                                            longPressHandler={longPressHandler}
                                        />
                                    );
                                })
                            )}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
