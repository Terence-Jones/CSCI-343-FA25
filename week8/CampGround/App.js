import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen"

import Colors from './constants/colors'
import HomeScreen from './screens/HomeScreen';

export default function App() {
  //keep the splash screen visible while we fetch resources 
  SplashScreen.preventAutoHideAsync();



  //fonts, Splash Screen, and loading 

  const[loaded] = Font.useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf")
  });

  useEffect(() => {
    if(loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //rendering screen
  if(!loaded) {
    return null;
  }

  let screen =(
    <HomeScreen/>
  )

  return (
    <>
      <StatusBar style ='light' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
