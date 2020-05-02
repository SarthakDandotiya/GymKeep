import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  TextInput,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import FlatButton from "../shared/button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { WorkoutsContext } from "../WorkoutsContext";
import ExerciseListItem from "../shared/exerciseItem";

export default function ActiveWorkout({ navigation, route }) {
  const [workouts, setWorkouts] = useContext(WorkoutsContext);
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const nameChangeHandler = (text) => {
    setName(text);
  };

  const setsChangeHandler = (text) => {
    setSets(text.toString());
  };

  const repsChangeHandler = (text) => {
    setReps(text.toString());
  };

  const weightChangeHandler = (text) => {
    setWeight(text.toString());
  };

  const submitHandler = () => {
    if (name.trim().length > 2 && parseInt(reps) > 0) {
      const startedAt = Date.parse(new Date().toJSON());
      setExercises((old) => {
        return [
          {
            name: name.trim(),
            sets: isNaN(cleanInt(sets)) ? 0 : cleanInt(sets),
            reps: isNaN(cleanInt(reps)) ? 0 : cleanInt(reps),
            weight: isNaN(parseFloat(weight).toFixed(2))
              ? 0
              : parseFloat(weight).toFixed(1) == 0
              ? 0
              : parseFloat(weight).toFixed(1),
            startedAt: startedAt,
          },
          ...old,
        ];
      });
      setName("");
      setSets("");
      setReps("");
      setWeight("");
    } else {
      Alert.alert(
        "Oops!",
        "Exercise name must be atleast 3 characters long and Reps must be more than 0..."
      );
    }
  };

  const longPressHandler = (timeStamp) => {
    setExercises((oldExercises) => {
      return oldExercises.filter((exercise) => exercise.startedAt != timeStamp);
    });
  };

  const confirmHandler = () => {
    if (exercises.length > 0) {
      const endedAt = Date.parse(new Date().toJSON());
      setWorkouts((old) => {
        return [
          {
            name: route.params.name,
            startedAt: route.params.startedAt,
            endedAt: endedAt,
            exercises: exercises,
          },
          ...old,
        ];
      });
      setExercises([]);
      navigation.navigate("Home");
    } else {
      Alert.alert("Oops!", "Add atleast one exercise to confirm workout...");
    }
  };

  let d = new Date(route.params.startedAt);
  let formattedDate =
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  const cleanInt = (badNumberString) =>
    parseInt(badNumberString.replace(/[^0-9]/g, ""));

  return (
    <View style={globalStyles.alternateContainer}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableHighlight
            style={{
              paddingVertical: 5,
              paddingRight: 5,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={require("../assets/cancel.png")}
              style={globalStyles.icon}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              paddingVertical: 5,
              paddingLeft: 5,
            }}
            onPress={confirmHandler}
          >
            <Image
              source={require("../assets/confirm.png")}
              style={globalStyles.alternateIcon}
            />
          </TouchableHighlight>
        </View>
        <View style={{ marginTop: 64 }}>
          <Text style={globalStyles.heading}>{route.params.name}</Text>
          <Text style={globalStyles.text555}>{formattedDate}</Text>
        </View>
        {/* Form */}
        <View style={{ marginVertical: 8 }}>
          <TextInput
            style={globalStyles.textInput}
            onChangeText={(text) => nameChangeHandler(text)}
            value={name}
            placeholder="Exercise Name"
          />
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.leftTextInput}
              placeholder="Sets"
              keyboardType="number-pad"
              onChangeText={(text) => setsChangeHandler(text)}
              value={sets}
              maxLength={2}
            />
            <TextInput
              style={styles.leftTextInput}
              placeholder="Reps"
              keyboardType="number-pad"
              onChangeText={(text) => repsChangeHandler(text)}
              value={reps}
              maxLength={2}
            />
            <TextInput
              style={styles.rightTextInput}
              placeholder="Weight"
              keyboardType="numeric"
              onChangeText={(text) => weightChangeHandler(text)}
              value={weight}
              maxLength={5}
            />
          </View>
          <FlatButton text="Add Exercise" onPress={submitHandler} />
        </View>
      </TouchableWithoutFeedback>
      {/* Exercise List */}
      <FlatList
        style={{ flex: 0, marginTop: 8 }}
        data={exercises}
        keyExtractor={(item) => item.startedAt.toString()}
        renderItem={({ item }) => (
          <ExerciseListItem
            exercise={item}
            startedAt={item.startedAt}
            longPressHandler={longPressHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leftTextInput: {
    height: 60,
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 16,
    fontFamily: "rhd-regular",
    color: "#121212",
    backgroundColor: "#ffffff",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 16,
    flex: 1,
  },
  rightTextInput: {
    height: 60,
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 16,
    fontFamily: "rhd-regular",
    color: "#121212",
    backgroundColor: "#ffffff",
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
  },
});
