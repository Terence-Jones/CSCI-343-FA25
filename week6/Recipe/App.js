import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {useFonts} from "expo-font";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import  Colors from "./constants/colors";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  //set up our custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title:"Math Recipe",
      text: "not sure what to put"
    },
    {
      id: 2,
      title: "birthday",
      text: "bacon and what not"
    },
    {
      id: 3,
      title: "morning",
      text: "eat some pancacls"
    }


  ])


  function homeScreenHandler() {
    setCurrentScreen("");
  };

  function recipesScreenHandler(){
    setCurrentScreen("recipe");

  };
  function addRecipeScreenHandler(){
    setCurrentScreen("add");

  };

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipe((currentRecipe) => [
      ...currentRecipe,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText}
    ]);
    setCurrentID(currentID +1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id){

    setCurrentRecipe((currentNotes)=>{
      return currentRecipe.filter((item)=> item.id !==id)
    })
  }

  let screen = <HomeScreen onNext ={recipesScreenHandler}/>

  if(currentScreen === "recipe"){
    screen = (<RecipesScreen
    onHome={homeScreenHandler}
    onAdd={addRecipeScreenHandler} 
    onDelete={deleteRecipeHandler}
    currentRecipe = {currentRecipe} />
    );
  }

  if(currentScreen === "add"){
    screen = (<AddRecipeScreen
    onCancel={recipesScreenHandler}
    onAdd={addRecipeHandler} />
    );
  }

  


  return (
    <>
      <StatusBar style="auto"/>
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
