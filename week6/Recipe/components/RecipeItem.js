import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../constants/colors"; 


export default function Recipeitem(props){
    return(
        <View style={styles.item}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>
            <View style={styles.ItemButtonContainer}>
                <View style={styles.button}>
                    <Button title="View" onPress={props.onView}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" onPress={props.onDelete}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: "row",
        justicyContent: "space-between",
        margin: 8,
        BorderRadius: 6,
        backgroundColor: Colors.accent500

    },

    itemTitleContainer:{
        justifyContent: "row",

        
    },
    itemTitle:{
        fontFamily: "paperNoteBold",
        fontSize: 20,
        color: Colors.primary300,
        padding: 8
    },



    ItemButtonContainer:{
        flexDirection: "row"

        
    },
    button:{
        marginHorizontal: 3,
        marginVertical: 5
    }

})