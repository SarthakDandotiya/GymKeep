import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  AsyncStorage,
} from "react-native";
import { globalStyles } from "../styles/global";
import { TouchableHighlight, ScrollView } from "react-native-gesture-handler";
import FlatButton from "../shared/button";
import TouchableWorkoutListItem from "../shared/workoutItem";
import { WorkoutsContext } from "../WorkoutsContext";

export default function Home({ navigation }) {
  let syncFlag = false;

  const isInitialMount = useRef(true);
  const [workouts, setWorkouts] = useContext(WorkoutsContext);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      initialPopulate();
    }
  }, []);

  const initialPopulate = () => {
    AsyncStorage.getItem("GYMKEEP")
      .then((data) => {
        if (data !== null) {
          // if(data !== null)
          // console.log("From Promise:\n\n", data);
          setWorkouts(JSON.parse(data));
        } else {
          setWorkouts([]);
        }
      })
      .catch((err) => console.error("Error Fetching"));
    // .done(console.log("Populated Initially"));
  };

  const longPressHandler = (timeStamp) => {
    setWorkouts((oldWorkouts) => {
      return oldWorkouts.filter((workout) => workout.startedAt != timeStamp);
    });
  };

  const textChangeHandler = (text) => {
    setWorkoutName(text);
  };

  const beginWorkoutHandler = () => {
    if (workoutName.trim().length > 2) {
      if (syncFlag === false) {
        syncFlag = true;
        const startedAt = Date.parse(new Date().toJSON());
        navigation.navigate("ActiveWorkout", {
          name: workoutName.trim(),
          startedAt,
        });
        setTimeout(() => {
          syncFlag = false;
        }, 2000);
        setWorkoutName("");
        clearInterval();
      }
    } else {
      Alert.alert("Oops!", "Workout name must be atleast 3 characters long...");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        {/* Header */}
        <View style={globalStyles.alternateHeader}>
          <View>
            <Text style={globalStyles.brand}>Gym</Text>
            <Text style={globalStyles.brand}>Keep</Text>
          </View>
          {/* <TouchableHighlight
                        onPress={() => navigation.navigate("Options")}
                    >
                        <Image
                            source={require("../assets/menu.png")}
                            style={globalStyles.dp}
                        />
                    </TouchableHighlight> */}
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
              onChangeText={(text) => textChangeHandler(text)}
              value={workoutName}
              placeholder="Workout Name"
            />
            <FlatButton text="Begin" onPress={beginWorkoutHandler} />
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
                onPress={() => navigation.navigate("AllWorkouts")}
              >
                <Text style={globalStyles.textGreen}>View All</Text>
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
                  <Text style={globalStyles.text555}>Get going!</Text>
                </View>
              ) : (
                workouts.slice(0, 3).map((item) => {
                  return (
                    <TouchableWorkoutListItem
                      key={item.startedAt}
                      name={item.name}
                      startedAt={item.startedAt}
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
