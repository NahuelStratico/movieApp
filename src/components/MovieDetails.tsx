import React from 'react'
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';


interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast }: Props ) => {
  

  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection:'row'}}>
          <Icon
              name="star-outline"
              color="grey"
              size={ 16 }
          />

          <Text> { movieFull.vote_average }</Text>

          <Text style={{ marginLeft: 5 }}>
            
              - { movieFull.genres.map( g => g.name).join(', ') }
          </Text>
        </View>

        {/* History */}

        <Text style={{ fontSize:23, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>

        <Text style={{ fontSize:16 }}>
          { movieFull.overview }
        </Text>

        {/* Budget */}
      <View style={{ flexDirection:'row', alignItems:'center', marginTop: 10}}>
        <Text style={{ fontSize:23, fontWeight: 'bold' }}>
          Presupuesto:  
        </Text>

        <Text style={{ fontSize:18, marginLeft:10 }}>
          { currencyFormatter.format(movieFull.budget, { code:'USD' }) }
        </Text>
      </View>

      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text style={{ fontSize:23, fontWeight: 'bold', marginHorizontal: 20}}>
          Actores: 
        </Text>

        <FlatList 
          data={cast}
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({ item }) => <CastItem actor={ item } /> }
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
        />
        
      </View>
    </>
  )
}
