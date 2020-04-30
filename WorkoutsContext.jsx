import React, { useState, createContext } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
    const [workouts, setWorkouts] = useState([]);

    return (
        <WorkoutsContext.Provider value={[workouts, setWorkouts]}>
            {props.children}
        </WorkoutsContext.Provider>
    );
};
