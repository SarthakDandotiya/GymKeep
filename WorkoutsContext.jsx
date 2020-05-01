import React, { useState, createContext, useEffect, useRef } from "react";
import { AsyncStorage } from "react-native";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
    const isInitialMount = useRef(true);
    const [workouts, setWorkouts] = useState([]);

    const getLocalWorkouts = async () => {
        await AsyncStorage.getItem("gymKeepWorkouts")
            .then((value) => {
                // console.log("From Promise:\n\n", value);
                if (typeof value != null) {
                    setWorkouts(JSON.parse(value));
                }
            })
            .done();
    };

    const setLocalWorkouts = async () => {
        try {
            await AsyncStorage.setItem(
                "gymKeepWorkouts",
                JSON.stringify(workouts)
            );
            // console.log(
            //     "UPDATE:\n\n",
            //     await AsyncStorage.getItem("gymKeepWorkouts")
            // );
        } catch (error) {
            console.error("Error Setting", error);
        }
        // console.log("Done Setting.");
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getLocalWorkouts();
        } else {
            setLocalWorkouts();
        }
    }, [workouts]);

    return (
        <WorkoutsContext.Provider value={[workouts, setWorkouts]}>
            {props.children}
        </WorkoutsContext.Provider>
    );
};
