import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function NewsItem(props) {
  const navigation = useNavigation();

  function selectedListingHandler() {
    navigation.navigate("ListingDetail", {
      listingId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedListingHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>

       
        <View style={styles.infoContainer}>
          {/* //headline */}
          <Text style={styles.address}>
            {props.address}
          </Text>
          {/* date */}

          <Text style={styles.space}>
            {props.bedrooms}
          </Text>
          
          
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 300,
    borderRadius: 7,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 28,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  space: {
    fontSize: 18,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 14,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "playfair",
    color: "#444",
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
