import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ActiveWorkout from "./screens/ActiveWorkout";
import AllWorkouts from "./screens/AllWorkouts";
import CompletedWorkout from "./screens/CompletedWorkout";
import Home from "./screens/Home";
import Options from "./screens/Options";

const Stack = createStackNavigator();

const getFonts = () =>
    Font.loadAsync({
        "rhd-regular": require("./assets/fonts/RedHatDisplay-Regular.ttf"),
        "rhd-bold": require("./assets/fonts/RedHatDisplay-Bold.ttf"),
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' headerMode='none'>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Options' component={Options} />
                    <Stack.Screen
                        name='ActiveWorkout'
                        component={ActiveWorkout}
                    />
                    <Stack.Screen name='AllWorkouts' component={AllWorkouts} />
                    <Stack.Screen
                        name='CompletedWorkout'
                        component={CompletedWorkout}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}
