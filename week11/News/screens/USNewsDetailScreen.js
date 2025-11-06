import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LISTINGS } from "../data/dummy_data";
import { useContext, useLayoutEffect, useState } from "react";
import Colors from '../constants/colors'
import BookmarkButton from "../components/List/BookmarkButton";
import { FavoritesContext } from "../store/context/favorites-context";


export default function USNewsDetailScreen(props) {
  const FavoriteNewsCtx = useContext(FavoritesContext);


  const listingId = props.route.params.listingId;
  const selectedNews = LISTINGS.find((listing) => listing.id === listingId);

  const NewsIsFavorite = FavoriteNewsCtx.ids.includes(listingId);

  function changeFavoriteStatusHandler(){
    if (NewsIsFavorite){
      FavoriteNewsCtx.removeFavorite(listingId);
    } else {
      FavoriteNewsCtx.addFavorite(listingId);
    }
  }

  

  useLayoutEffect(() =>{
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return(
          <BookmarkButton
          isFavorite={NewsIsFavorite}
          onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
    

  }, [props.navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      
      <View style={styles.infoContainer}>
        <Text style={styles.price}>${selectedNews.price.toLocaleString()}</Text>
        <Text style={styles.space}>
          {selectedNews.bedrooms} Bed | {selectedNews.bathrooms} Bath |{" "}
          {selectedNews.squareFeet} SqFt
        </Text>
        <Text style={styles.address}>{selectedNews.address}</Text>
        <Text style={styles.year}>Built {selectedNews.yearBuilt}</Text>

        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary500o8,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    borderBottomWidth: 1,
    borderColor: Colors.primary500,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
    alignItems: "center",
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  space: {
    fontSize: 18,
    color: Colors.primary500,
    marginBottom: 6,
  },
  address: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginBottom: 6,
  },
  year: {
    fontSize: 15,
    color: Colors.primary500,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: Colors.primary500,
    lineHeight: 22,
    textAlign: "justify",
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

