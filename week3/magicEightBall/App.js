import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
} from "react-native";

export default function App() {
  
  const responses = [
    "Sure",
    "mmmmmm nahhhh",
    "probably not ",
    "we'll get them next time soldier",
    "Ask again or not.",
    "why you asking me i dont know the future",
    "IDK.",
    "YES IT WILL HAPPEN.",
    "im 70% sure it going to happen",
    "have you ever tried chili's",
  ];

  
  const [userQuestion, setUserQuestion] = useState("");
  const [magicResponse, setMagicResponse] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  
  function handleSubmit() {
    if (userQuestion === "") return;
    const randomIndex = Math.floor(Math.random() * responses.length);
    setMagicResponse(responses[randomIndex]);
    setModalIsVisible(true);
  }

 
  function handleClose() {
    setModalIsVisible(false);
    setUserQuestion(""); 
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Ask your question"
          value={userQuestion}
          onChangeText={setUserQuestion}
        />

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [
              styles.submitButton,
              pressed && styles.pressedButton,
            ]}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
        </View>

        
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.modalTitle}>Your Question:</Text>
            <Text style={styles.modalText}>{userQuestion}</Text>

            <Text style={styles.modalTitle}>Magic 8-Ball says:</Text>
            <Text style={styles.modalResponse}>{magicResponse}</Text>

            <View style={styles.buttonContainer}>
              <Button title="Close" color="red" onPress={handleClose} />
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  pressedButton: {
    opacity: 0.5,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
    textAlign: "center",
  },
  modalResponse: {
    fontSize: 28,
    color: "yellow",
    marginVertical: 20,
    textAlign: "center",
  },
});
