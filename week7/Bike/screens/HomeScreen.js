import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useState, useMemo } from "react";
import Colors from "../constants/colors.js";
import { StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title.js";
import { ScrollView } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { Switch } from "react-native";

//import {NavButon} from "../components/NavButton"

export default function HomeScreen(props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Bike repair</Title>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {/* sandwitch size options */}

        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Service Time</Text>

          <RadioGroup
            radioButtons={props.breadRadioButtons}
            onPress={props.onSetBreadId}
            selectedId={props.breadId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Service type:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.meats.map((item) => {
                return (
                  <BouncyCheckBox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetMeats.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{ borderRadius: 0 }}
                    fillColor={Colors.primary500}
                    style={styles.checkBox}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.addOnContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>newsletter</Text>
              <Switch
                onValueChange={props.onSetDoubleMeat}
                value={props.doubleMeat}
                thumbColor={
                  props.doubleMeat ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767477", true: "#81b0ff" }}
              />


              <Text style={styles.addOnsLabel}>rental membership signup($100)</Text>
              <Switch
                onValueChange={props.onSetDoubleMeat}
                value={props.doubleMeat}
                thumbColor={
                  props.doubleMeat ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767477", true: "#81b0ff" }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  radioHeader: {
    fontSize: 30,
    color: Colors.primary300,
    fontFamily: "Note",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary800,
    fontFamily: "Note",
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note",
  },

  checkBoxSubContainer: {
    padding: 2,
  },

  checkBox: {
    padding: 2,
  },
  addOnsLabel: {
    flexDirection: "row",
  },

  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "Space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "Note",
  },
  addOnSwitch: {
    thumbColor: Colors.primary500,
  },
});
