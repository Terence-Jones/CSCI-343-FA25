import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Movie from "./components/Movie";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

export default function App() {
  const [restaurantItems, setRestaurantItems] = useState([
    {
      name: "Trigun: Badlands Rumble",
      image: require("./assets/images/trigun.jpg"),
      rating: "8.7",
      id: 1,
    },
    {
      name: "Akira",
      image: require("./assets/images/akira.jpg"),
      rating: "8.5",
      id: 2,
    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      image: require("./assets/images/spiderman.jpg"),
      rating: "8",
      id: 3,
    },
    {
      name: "Angel's Egg",
      image: require("./assets/images/egg.jpg"),
      rating: "7.5",
      id: 4,
    },
    {
      name: "Summer Wars",
      image: require("./assets/images/summerWars.jpg"),
      rating: "7",
      id: 5,
    },
    {
      name: "Ponyo",
      image: require("./assets/images/ponyo.jpg"),
      rating: "7",
      id: 6,
    },
    {
      name: "transformers One",
      image: require("./assets/images/trans.jpg"),
      rating: "7",
      id: 7,
    },
    {
      name: "Blade Runner 2049",
      image: require("./assets/images/runner.jpg"),
      rating: "7",
      id: 8,
    },
    {
      name: "Sky High",
      image: require("./assets/images/sky.jpg"),
      rating: "7",
      id: 9,
    },
    {
      name: "Sinners",
      image: require("./assets/images/Sinners.jpg"),
      rating: "7",
      id: 10,
    },
  ]);
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          {

          }
          <FlatList
          alwaysBounceVertical ={false}
          showsVerticalScrollIndicator={false}
          data ={restaurantItems}
          keyExtractor={(item, index) =>(item.id)}
          renderItem = {(itemData) => {
            return <Movie
                name={itemData.item.name}
                image={itemData.item.image}
                rating={itemData.item.rating}
              />
          }}
        />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 15,
    borderRadius: 10,
    marginTop: 160,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
//making a scroll view the tutorial
// for the project you making a flatview
// import { FlatList } from "react-native/types_generated/index";