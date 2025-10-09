//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect} from "react";
import { useState, useMemo } from "react";
import Colors from "./constants/colors";
import { StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';



import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = Font.useFonts({
    Note: require("./assets/fonts/Note.ttf"), // have to work on this
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const sizeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "6 Inch",
        value: "6 Inch",
        price: 6.5,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "12 Inch",
        value: "12 Inch",
        price: 12.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const breadRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "standard(0)",
        value: "standard(0)",
        borderColor: Colors.primary500,
        color: Colors.primary500,
        price: 0
      },
      {
        id: "1",
        label: "Expedited($50)",
        value: "Expedited($50)",
        borderColor: Colors.primary500,
        color: Colors.primary500,
        price: 50
      },
      {
        id: "2",
        label: "NextDay($100)",
        value: "NextDay($100)",
        borderColor: Colors.primary500,
        color: Colors.primary500,
        price: 100
      },
    ],
    []
  );

  const cheeseRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "American",
        value: "American",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Pepper Jack",
        value: "Pepper Jack",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Provalone",
        value: "Provalone",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "3",
        label: "Mozzarella",
        value: "Mozzarella",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "4",
        label: "Swiss",
        value: "Swiss",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "5",
        label: "Cheddar",
        value: "Cheddar",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "6",
        label: "Feta",
        value: "Feta",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [sizeId, setSizeId] = useState(0);
  const [breadId, setBreadId] = useState(0);
  const [cheeseId, setCheeseId] = useState(0);
  const [meats, setMeats] = useState([
    { id: 0, name: "Basic Tune-Up($50)", value: false, price: 50 },
    { id: 1, name: "Comprehensive($75)", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair($20)", value: false, price: 20 },
    { id: 3, name: "Brake Sericing($50)", value: false, price: 50 },
    { id: 4, name: "Gear servicing($40)", value: false, price: 40 },
    { id: 5, name: "Chain servicing($15)", value: false, price: 15 },
    { id: 6, name: "Frame Repair($35)", value: false, price: 35 },
    { id: 7, name: "Safety Check($25)", value: false, price: 25 },
    { id: 8, name: "accessory install($10)", value: false, price: 10 },
    
  ]);
  const [sauces, setSauces] = useState([
    { id: 0, name: "Mayonnaise", value: false },
    { id: 1, name: "Mustard", value: false },
    { id: 2, name: "Ranch", value: false },
    { id: 3, name: "Chipotle", value: false },
    { id: 4, name: "Sweet Onion", value: false },
    { id: 5, name: "Honey Mustard", value: false },
    { id: 6, name: "Oil", value: false },
    { id: 7, name: "Vinegar", value: false },
    { id: 8, name: "Hot", value: false },
    { id: 9, name: "BBQ", value: false },
    { id: 10, name: "Marinara", value: false },
  ]);
  const [vegetables, setVegetables] = useState([
    { id: 0, name: "Lettuce", value: false },
    { id: 1, name: "Tomato", value: false },
    { id: 2, name: "Cucumber", value: false },
    { id: 3, name: "Onions", value: false },
    { id: 4, name: "Bell Peppers", value: false },
    { id: 5, name: "Spinach", value: false },
    { id: 6, name: "Pickles", value: false },
    { id: 7, name: "Olives", value: false },
    { id: 8, name: "Jalapenos", value: false },
    { id: 9, name: "Banana Peppers", value: false },
  ]);
  const [doubleMeat, setDoubleMeat] = useState(false);
  const [doubleCheese, setDoubleCheese] = useState(false);
  const [toasted, setToasted] = useState(false);
  const [mealCombo, setMealCombo] = useState(false);

  function setMeatHandler(id) {
    setMeats((prevMeats) =>
      prevMeats.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setSauceHandler(id) {
    setMeats((prevSauces) =>
      prevSauces.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setVegetablesHandler(id) {
    setMeats((prevVegetables) =>
      prevVegetables.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setDoubleMeatHandler() {
    setDoubleMeat((previous) => !previous);
  }
  function setDoubleCheeseHandler() {
    setDoubleCheese((previous) => !previous);
  }
  function setDoubleToastedHandler() {
    setDoubleToasted((previous) => !previous);
  }
  function setMealComboHandler() {
    setDoubleCombo((previous) => !previous);
  }

  let screen = (
    <HomeScreen
      sizeId={sizeId}
      breadId={breadId}
      chesseId={cheeseId}
      meats={meats}
      sauces={sauces}
      vegetables={vegetables}
      doubleMeat={doubleMeat}
      toasted={toasted}
      mealCombo={mealCombo}
      sizeRadioButtons={sizeRadioButtons}
      breadRadioButtons={breadRadioButtons}
      cheeseRadioButtons={cheeseRadioButtons}
      onSetSizeId={setSizeId}
      onSetBreadId={setBreadId}
      onSetCheeseId={setCheeseId}
      onsetMeatId={setMeatHandler}
      onSetMeats={setMeatHandler}
      onSetSauces={setSauceHandler}
      onSetVegetable={setVegetablesHandler}
      OnSetDoubleMeat={setDoubleMeatHandler}
      onSetDoubleCheese={setDoubleCheeseHandler}
      OnsetToasted={setDoubleToastedHandler}
      OnSetMealCombo={setMealComboHandler}
      onNext={() => {}}
    />
  );

  if (!loaded) {
    return null;
  }

  return (
  <>
    <StatusBar style= "light"/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
