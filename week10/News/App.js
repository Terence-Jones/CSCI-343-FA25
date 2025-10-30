import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,

} from "@expo/vector-icons"

import USNewsDetailScreen from "./screens/USNewsDetailScreen"
import USNewsScreen from './screens/USNewsScreen';
import BookmarksScreen from "./screens/BookmarksScreen"
import WorldNewsScreen from "./screens/WorldNewsScreen"
import VideogameNewsScreen from "./screens/VideogameNewsScreen"
import Colors from "./constants/colors"


//keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
    initialRouteName='News'
    screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "nolluqa",
        fontSize: 40,
        color: Colors.accent800,
      },

      sceneContainerStyle: {backgroundColor: Colors.primary300},
      drawerContentStyle: {backgroundColor: Colors.primary500},
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent500,
      drawerActiveBackgroundColor: Colors.primary800,


    }}
    
    >
      <Drawer.Screen
      name="News"
      component={TabsNavigator}
      options={{
        title: "All News",
        drawerLabel: "News listing",
        drawerIcon: ({color, size}) =>
          <Entypo name="list" color={color} size={size} />
      }}
      />
      <Drawer.Screen
      name ="BookmarkNews"
      component={BookmarksScreen}
      options={{
        title: "Saved News",
        drawerLabel: "Saved News",
        drawerIcon: ({color, size}) =>
          <Entypo name="bookmark" color={color} size={size} />
      }}
      />
    </Drawer.Navigator>
    
    
  )
}

function TabsNavigator(){
  return(
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        }
        
      }}
    
    >
      <Tabs.Screen
      name="USNews"
      component={USNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          return <Entypo name="home" color={color} size={size} />;
        },
        tabBarLabel: " Us News",
      }}
      />

      <Tabs.Screen
      name="WorldNews"
      component={WorldNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          return <Entypo name="home" color={color} size={size} />;
        },
        tabBarLabel: "World News",
      }}
      />
      {/* 36 mins  */}
      <Tabs.Screen
      name="VideogameNews"
      component={VideogameNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          return <Entypo name="home" color={color} size={size} />;
        },
        tabBarLabel: "Videogame News",
      }}
      />
    </Tabs.Navigator>

    
  )
}

export default function App() {

  const [loaded] = Font.useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf")
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
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='DrawerScreen'
          screenOptions={{
            headerTintColor: Colors.primary300,
            headerStyle: {backgroundColor: Colors.primary500},
            contentStyle: {backgroundColor: "black"},
          }}
        
        >
          <Stack.Screen 
            name="DrawerScreen"
            component={DrawerNavigator}
            options ={{
              headerShown: false,
            }}
            

          />
          <Stack.Screen 
            name="ListingDetail"
            component={USNewsDetailScreen}
            options ={{
              headerShown: true,
              headerBackTitleVisible: false,
              
            }}
          
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
