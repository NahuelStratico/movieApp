import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movie: Movie[];
}

export const HorizontalScroll = ({ title, movie }: Props) => {
  return (
    <View style={{ height: ( title ) ? 260 : 220 }}>

        {
          title && <Text style={{ fontSize:30, fontWeight:'bold', color:'black', marginLeft:10 }}> { title } </Text>
        }
        
        <FlatList
          data={movie}
          renderItem={  ({ item }: any) =>  (
            <MoviePoster movie={ item } width={140} height={200} /> 
          )}
          keyExtractor={ (item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
