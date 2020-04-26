import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import { AppLoading } from 'expo';
import AllWorkouts from './screens/AllWorkouts';

const getFonts = () => Font.loadAsync({
    'rhd-regular' : require('./assets/fonts/RedHatDisplay-Regular.ttf'),
    'rhd-medium' : require('./assets/fonts/RedHatDisplay-Medium.ttf'),
    'rhd-bold' : require('./assets/fonts/RedHatDisplay-Bold.ttf'),
  });


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Home/>
    )
  } else {
    return(
      <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    )
  }
}
