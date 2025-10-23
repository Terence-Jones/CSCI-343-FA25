import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COUNTRIES, LOCATIONS } from '../data/dummy-data';
import VacationLocationItem from '../components/VacationLocationItem' 


export default function VacationOverViewScreen(props) {
    const stateId = props.route.params.stateId;

    useLayoutEffect(() =>{
        const country = COUNTRIES.find((country) => country.id === stateId)
        props.navigation.setOptions({title: country ? country.name : null});
    }, [stateId, props.navigation]);

    const displayedVacations = LOCATIONS.filter((locationItem) => {
        return locationItem.stateId === stateId;
    })

    function renderVacationLocationItem(itemData){
        const  locationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            numSites: itemData.item.numSites,
            foundedYear:  itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index

        };

        return <VacationLocationItem {...locationItemProps}/>
    }
    
  return (
    <View style={styles.container}>
        <FlatList 
        data={displayedVacations}
        keyExtractor={(item) => item.id}
        renderItem={renderVacationLocationItem}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    }
});

