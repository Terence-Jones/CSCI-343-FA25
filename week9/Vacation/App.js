import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import VacationOverViewScreen from "./screens/VacationOverViewScreen";
console.log("VacationOverViewScreen:", VacationOverViewScreen);

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  //fonts, Splash Screen, and loading

  const [loaded] = Font.useFonts({
    Note: require("./assets/fonts/Note.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //rendering screen
  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={styles.screenOptions}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Vacation Locations",
            }}
          />

          <Stack.Screen
            name="VacationOverView"
            component={VacationOverViewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  screenOptions: {
    headerStyle: { backgroundColor: Colors.primary500 },
    headerTintColor: Colors.primary300,
    headerTitleStyle: { fontFamily: "Note", fontSize: 40 },
    contentStyle: { backgroundColor: Colors.primary800 },
  },
});
