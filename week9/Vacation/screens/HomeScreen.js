import { View, Text, FlatList } from "react-native";
import StateGidTile from "../components/StateGridTile";
import { COUNTRIES } from "../data/dummy-data";


export default function HomeScreen(props){
    function renderVacationItem(itemData){
        function pressHandler(){
            props.navigation.navigate("VacationOverView",{
                stateId: itemData.item.id
            });
        }
        return(
            <StateGidTile
            name ={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler}
            
            
            />

        );

    }
    return(
        <View>
            <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => {return item.id;}}
            renderItem={renderVacationItem}
            numColumns={2}
            />
        </View>
    );

}

