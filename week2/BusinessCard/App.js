import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/trueForm.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={styles.name}
            onPress={() => {
              console.log("Hello");
            }}
          >
            Terence Jones
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("mailto:tjones14@coastal.edu");
            }}
          >
            tjones14@coastal.edu
          </Text>

          <Text style={styles.text}
            onPress={() => {
              Linking.openURL("tel:5048774979")
            }}
          >(504) 877-4979</Text>

          <Text style={styles.text}
          onPress={() => {
            Linking.openURL("https://github.com/Terence-Jones/CSCI-343-FA25");
          }}
          >
            GitHub
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A99985",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    marginTop: 120,
    width: "400",
  },
  image: {
    
    height: 200,
    width: "100%",
    resizeMode: "center",
    borderColor: "#70798C",
    borderWidth: 7,
    
    
  },
  textContainer: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  name: {
    
    fontSize: 17,
    marginBottom: 70,
    color: "#F5F1ED"
  },

  text: {
    marginBottom: 60,
    color: "#F5F1ED"
  },
});
