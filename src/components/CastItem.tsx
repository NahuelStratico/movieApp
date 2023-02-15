import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Text, View, Image, StyleSheet } from 'react-native';

interface Props {
  actor: Cast
}

export const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

  return (
    <View style={ styles.container }>
      {
        actor.profile_path && (
            <Image
              source={{ uri }}
              style={{width: 50, height: 50, borderRadius: 10}}
            />
          )
      }
      <View style={ styles.actorInfo }>
        <Text style={{ fontSize:18, fontWeight: 'bold'}}>
          {actor.name}
        </Text>
        <Text>
        {actor.character}
        </Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginHorizontal: 10,
    marginLeft:20,
    marginVertical:10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 7,
  },
  actorInfo:{
    marginLeft: 10
  }
})