import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Options from "../screens/Options";
import ActiveWorkout from "../screens/ActiveWorkout";
import AllWorkouts from "../screens/AllWorkouts";
import CompletedWorkout from "../screens/CompletedWorkout";

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' headerMode='none'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Options' component={Options} />
                <Stack.Screen name='ActiveWorkout' component={ActiveWorkout} />
                <Stack.Screen name='AllWorkouts' component={AllWorkouts} />
                <Stack.Screen
                    name='CompletedWorkout'
                    component={CompletedWorkout}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
