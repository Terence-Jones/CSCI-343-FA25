import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import { useState } from "react";
import ImageViewModal from "../modal/ImageViewModal";

export default function VacationLocation(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }
  function closeImageHandler() {
    setModalIsVisible(false);
  }
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.naame}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.sites}>Average Cost: {props.numSites}</Text>
              <Text style={styles.year}>Founded:{props.foundedYear}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating}/ 5</Text>
          </View>

        </View>
      </Pressable>

      <ImageViewModal
        isVisible={modalIsVisible}
        description={props.description}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    
  },

  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },

  infoContainer:{
    width: "75%",
    paddingLeft: 50

  },
  naame:{
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 20,
    
  },
  sites:{
    width: "85%",
    fontSize: 14
  },

  year:{
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: 40
  },
  innerRowContainer:{
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  rating:{
    fontSize: 13,
    fontStyle: "italic"
  }
});
