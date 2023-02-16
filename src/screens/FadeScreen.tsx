import React from 'react'
import { Button, View,Animated } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade()
  

  return (
    <View style={{
      flex:1,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Animated.View
        style={{
          width:200,
          height:200,
          backgroundColor:'blue',
          borderColor: 'white',
          borderWidth:5,
          marginBottom:20,
          opacity 
        }}
      />

      <Button
        title="FadeIn"
        onPress={ fadeIn }
      />
      <Button
        title="FadeOut"
        onPress={ fadeOut }
      />
    </View>
  )
}
