import {
  ImageBackground,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Pressable } from "react-native";

import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Text, Modal, Button } from "react-native";
import WheelPicker from "react-native-wheely";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  //set safe aera screen boundaries
  const insets = useSafeAreaInsets();

  //Check in state and functions
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS == "android") {
      hideCheckInPicker();
    }
    setCheckIn(currentDate);
  }

  //Check out state and functions
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS == "android") {
      hideCheckOutPicker();
    }
    setCheckOut(currentDate);
  }

  //Guest count state and function
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuest, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestPicker() {
    setShowNumGuests(true);
  }
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  const campCounts = [1, 2, 3, 4, 5];
  const [numCamp, setNumCamps] = useState(0);
  const [ShowNumCamps, setShowNumCamps] = useState(false);

  function showNumCampsPicker() {
    setShowNumCamps(true);
  }

  function hideNumCampsPicker() {
    setShowNumCamps(false);
  }
  function onChangeNumCamps(index) {
    setNumCamps(index);
  }

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In: \t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuest]}\n`;
    res = res + `Number of Camps:\t\t${campCounts[numCamp]}\n`;
    setResults(res);
  }

  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1,
  };
  const dateTextFlex = {
    fonstSize: width * 0.05,
  };

  const resultsFlex = {
    fontSize: width * 0.07,
  };

  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.bottom,
            paddingRight: insets.right,
          },
        ]}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.scrollMainContainer}>
            <View style={styles.titleContainer}>
              <Title>Rivirea Campground</Title>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress={showCheckInPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkIn.toDateString()}
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>
                  Check Out:
                </Text>
                <Pressable onPress={showCheckOutPicker}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {checkOut.toDateString()}
                  </Text>
                </Pressable>
              </View>
            </View>

            <View>
              {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePicker1"
                  value={checkIn}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckIn}
                />
              )}
              {showCheckIn && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientation={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePickerAndroid
                        testID="dateTimePicker2"
                        value={checkIn}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckIn}
                      />

                      <Button title="Confirm" onPress={hideCheckInPicker} />
                    </View>
                  </View>
                </Modal>
              )}
              {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePicker3"
                  value={checkOut}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckOut}
                />
              )}
              {showCheckOut && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientation={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePickerAndroid
                        testID="dateTimePicker4"
                        value={checkOut}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckOut}
                      />

                      <Button title="Confirm" onPress={hideCheckOutPicker} />
                    </View>
                  </View>
                </Modal>
              )}
            </View>

            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Guests:
              </Text>
              <Pressable onPress={showNumGuestPicker}>
                <View style={styles.dateTextContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {guestCounts[numGuest]}
                  </Text>
                </View>
              </Pressable>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumGuests}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateLabel, dateLabelFlex]}>
                      Enter Number of Guests
                    </Text>
                    <WheelPicker
                      selectedIndex={numGuest}
                      options={guestCounts}
                      onChange={onChangeNumGuests}
                      containerStyle={{ width: 200 }}
                    />
                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                  </View>
                </View>
              </Modal>
            </View>

            <View style={styles.rowContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Camps:
              </Text>
              <Pressable onPress={showNumCampsPicker}>
                <View style={styles.dateTextContainer}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {campCounts[numCamp]}
                  </Text>
                </View>
              </Pressable>
              <Modal
                animationType="slide"
                transparent={true}
                visible={ShowNumCamps}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateLabel, dateLabelFlex]}>
                      Number of Camps:
                    </Text>
                    <WheelPicker
                      selectedIndex={numCamp}
                      options={campCounts}
                      onChange={onChangeNumCamps}
                      containerStyle={{ width: 200 }}
                    />
                    <Button title="Confirm" onPress={hideNumCampsPicker} />
                  </View>
                </View>
              </Modal>
            </View>

            <View style={styles.buttonContainer}>
              <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>
            <View style={styles.resultsContainer}>
              <Text style={[styles.results, resultsFlex]}>{results}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  backgroundImage: {
    opacity: 0.3,
  },

  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,

    maxWidth: "90%",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  scrollMainContainer:{
    justifyContent: "center",
    alignItems: "center",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    
  },

  dateLabel: {
    color: Colors.primary300,
    fontFamily: "Mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },

  dateTextContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    paddingHorizontal: 30,
  },

  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  resultsContainer: {},
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "Mountain",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
