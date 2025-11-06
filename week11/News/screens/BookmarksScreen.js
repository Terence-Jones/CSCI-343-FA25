import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { LISTINGS } from '../data/dummy_data';
import NewsItem from '../components/List/NewsItem';
import News from '../components/List/News';
import Colors from '../constants/colors';
export default function BookMarksScreen() {
  const FavoriteNewsCtx = useContext(FavoritesContext);
  const favoriteNews = LISTINGS.filter((NewsItem) =>{
    return FavoriteNewsCtx.ids.includes(NewsItem.id);
  });

  if(favoriteNews.length === 0){
    return (
      <View style={styles.container}>
        <Text style={styles.text}> You have nothing saved </Text>
      </View>
    );
  }
  return (
    <News items={favoriteNews}/>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300
  }
});
