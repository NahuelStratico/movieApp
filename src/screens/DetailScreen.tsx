import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const screenHeight  = Dimensions.get('screen').height;

export const DetailScreen = ({ route, navigation  }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, movieFull, cast }= useMovieDetails(movie.id)

  return (
    <ScrollView>

      <View style={ styles.imageContainer }>
        <View style={styles.imageBorder}>
          <Image
            source={{uri}}
            style={ styles.posterImage }
          />
        </View>
      </View>

    <View style={ styles.marginConteiner }>
      <Text style={ styles.subTitle }>{ movie.original_title }</Text>
      <Text style={ styles.title }>{ movie.title }</Text>
    </View>

    {
      isLoading
       ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
      : <MovieDetails movieFull={ movieFull! } cast={ cast } />
    } 

    {/* Close Button */}
    <View style={ styles.backButton }>
      <TouchableOpacity 
        onPress={ () => navigation.pop()}
      >
        <Icon
          name="arrow-back-circle-outline"
          color="white"
          size={ 60 } 
        />
      </TouchableOpacity>
    </View>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  imageContainer:{
    width:'100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 7,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
  },
  imageBorder:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
  },
  posterImage:{
    flex:1,
  },
  marginConteiner:{
    marginHorizontal:20,
    marginTop:20
  },
  subTitle:{
    fontSize:16,
    opacity:0.8
  },
  title:{
    fontSize:20,
    fontWeight: 'bold'
  },
  backButton:{
    position:'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 3
  }
})