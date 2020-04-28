import React, { Component } from "react";
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
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import FlatButton from "../shared/button";
import TouchableWorkoutListItem from "../shared/workoutListItem";

class Home extends Component {
    state = {
        workouts: [
            {
                startedAt: 1588002675000,
                endedAt: 1588002817420,
                name: "Push Day",
                exercises: [
                    {
                        name: "DB Bench Press",
                        sets: 3,
                        reps: 12,
                        weight: 10,
                    },
                    {
                        name: "DB Shoulder Press",
                        sets: 3,
                        reps: 10,
                        weight: 7.5,
                    },
                    {
                        name: "DB Lateral Raise",
                        sets: 3,
                        reps: 8,
                        weight: 7.5,
                    },
                    {
                        name: "DB Flys",
                        sets: 3,
                        reps: 10,
                        weight: 5,
                    },
                ],
            },
            {
                startedAt: 1587902817420,
                endedAt: 1587916275000,
                name: "Pull Day",
                exercises: [
                    {
                        name: "Cable Rows",
                        sets: 3,
                        reps: 12,
                        weight: 15,
                    },
                    {
                        name: "DB Dead Lifts",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "DB Reverse Flys",
                        sets: 3,
                        reps: 10,
                        weight: 5,
                    },
                    {
                        name: "DB Shrugs",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                ],
            },
            {
                startedAt: 1587802817420,
                endedAt: 1587816275000,
                name: "Leg Day",
                exercises: [
                    {
                        name: "DB Squats",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "DB Romanian Dead Lift",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "DB Calf Raise",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "Hip Thrust",
                        sets: 3,
                        reps: 10,
                        weight: 0,
                    },
                ],
            },
            {
                startedAt: 1587802817490,
                endedAt: 1587816275230,
                name: "Fake Day",
                exercises: [
                    {
                        name: "DB Squats",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "DB Romanian Dead Lift",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "DB Calf Raise",
                        sets: 3,
                        reps: 10,
                        weight: 10,
                    },
                    {
                        name: "Hip Thrust",
                        sets: 3,
                        reps: 10,
                        weight: 0,
                    },
                ],
            },
        ],
    };

    handleTextChange = (text) => {
        this.setState({
            workoutName: text,
        });
        console.log(text, this.state.workoutName);
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={globalStyles.container}>
                    <StatusBar
                        backgroundColor='#000000'
                        barStyle='light-content'
                    />
                    {/* Header */}
                    <View style={globalStyles.homeHeader}>
                        <View>
                            <Text style={globalStyles.brand}>Gym</Text>
                            <Text style={globalStyles.brand}>Keep</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate("Options")
                            }
                        >
                            <Image
                                source={require("../assets/menu.png")}
                                // source={require("../assets/defaultUserImage.png")}
                                style={globalStyles.dp}
                            />
                        </TouchableOpacity>
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
                                onChangeText={(text) =>
                                    this.handleTextChange(text)
                                }
                                placeholder='Workout Name'
                                placeholderTextColor='#777777'
                            />
                            <FlatButton
                                text='Begin'
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "ActiveWorkout"
                                    )
                                }
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
                                <Text style={globalStyles.heading}>
                                    Previous
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "AllWorkouts"
                                        )
                                    }
                                >
                                    <Text style={globalStyles.textGreen}>
                                        View All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* Short List */}
                            <ScrollView
                                style={{ minHeight: 76, maxHeight: 232 }}
                            >
                                {this.state.workouts.length < 3
                                    ? this.state.workouts.map((item) => {
                                          return (
                                              <TouchableWorkoutListItem
                                                  key={item.startedAt}
                                                  name={item.name}
                                                  date={item.startedAt}
                                              />
                                          );
                                      })
                                    : this.state.workouts
                                          .slice(-3)
                                          .map((item) => {
                                              return (
                                                  <TouchableWorkoutListItem
                                                      key={item.startedAt}
                                                      name={item.name}
                                                      date={item.startedAt}
                                                      workout={item.workout}
                                                      navigation={
                                                          this.props.navigation
                                                      }
                                                  />
                                              );
                                          })}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Home;
