import { Text, View, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";
export default function NavButton(props) {
  const {width, height} = useWindowDimensions();
  return (
    
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && StyleSheet.pressedItem}

    

    
      
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,


    
    
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    textAlign: "center",
    color: Colors.accent300,
    fontFamily: "Mountain"
  },
});