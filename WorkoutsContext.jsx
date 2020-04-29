import React, { useState, createContext } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
    const [workouts, setWorkouts] = useState([
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
                {
                    name: "DB b/o Rows",
                    sets: 3,
                    reps: 20,
                    weight: 10,
                },
                {
                    name: "DB Bicep Curls",
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
    ]);

    return (
        <WorkoutsContext.Provider value={[workouts, setWorkouts]}>
            {props.children}
        </WorkoutsContext.Provider>
    );
};
