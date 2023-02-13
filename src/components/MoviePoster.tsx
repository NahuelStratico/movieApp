import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';


interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {

  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  return (
    <TouchableOpacity 
      onPress={ () => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.8}
      style={{
      width,
      height,
      alignSelf:'center',
      marginHorizontal:2,
      paddingBottom: 20,
      paddingHorizontal: 7
    }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    borderRadius: 18,
  },
  imageContainer:{
    flex:1,
    // marginHorizontal:2,
    borderRadius:18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 7,
  },
  
})