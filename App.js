import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from "./routes/homeStack";
const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-SemiBold.ttf')
  })
}


export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onError={console.warn}
        onFinish={() => setFontLoaded(true)} 
      />
    )
  }

}