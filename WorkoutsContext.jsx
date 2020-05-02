import React, { useState, createContext, useEffect } from "react";
import { AsyncStorage } from "react-native";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
  const [workouts, setWorkouts] = useState([]);

  const setLocalWorkouts = async () => {
    try {
      await AsyncStorage.setItem("GYMKEEP", JSON.stringify(workouts));
    } catch (error) {
      console.error("Error Setting", error);
    }
  };

  useEffect(() => {
    setLocalWorkouts();
  }, [workouts]);

  return (
    <WorkoutsContext.Provider value={[workouts, setWorkouts]}>
      {props.children}
    </WorkoutsContext.Provider>
  );
};
