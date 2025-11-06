import { View, StyleSheet, FlatList} from 'react-native';
import NewsItem from './NewsItem';
//12:11
export default function News(props){
        function renderNewsItem(itemData){
            const NewsItemProp ={
                id: itemData.item.id,
                price: itemData.item.price,
                bedrooms: itemData.item.bedrooms,
                bathrooms: itemData.item.bathrooms,
                squareFeet: itemData.item.squareFeet,
                yearBuilt: itemData.item.yearBuilt,
                address: itemData.item.address,
                city: itemData.item.city,
                state: itemData.item.state,
                zipCode: itemData.item.zipCode,
                imageUrl:itemData.item.imageUrl,
                description: itemData.item.description,
                listIndex: itemData.index

            };
            return <NewsItem {...NewsItemProp}/>

        }
    return(
        <View style={styles.container}>
            <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderNewsItem}
            showVerticalScrollIndicator={false}
            />
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: "black",
    },
})