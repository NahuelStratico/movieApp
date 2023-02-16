import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';

import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalScroll } from '../components/HorizontalScroll';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovies } from '../hooks/useMovies';
import { GradientBackground } from '../components/GradientBackground';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


export const HomeScreen = () => {

  const { width: windowWidth } = Dimensions.get('window');
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const { setMainColors } = useContext( GradientContext );

  const  getPostColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    const [ primary = 'white', secondary = ' white' ] = await getColors( uri )
    setMainColors({ primary, secondary })
  }

  useEffect(() => {
    if( nowPlaying.length > 0 ){
        getPostColors(0)
      }
  }, [nowPlaying])
  


  if( isLoading ){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color='blue' size={80}/>
      </View> 
    )
  }

  return (
    <GradientBackground>

    <ScrollView>
      <View style={{marginTop:top + 20}}>

        {/* Featured Movies */}
        <View style={{ height: 440 }}>
          <Carousel 
            data={nowPlaying}
            renderItem={ ({ item }: any) =>  <MoviePoster movie={ item } /> }
            sliderWidth={ windowWidth }
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={ index => getPostColors(index)}
          />
        </View>

        {/* At the Cinema */}
        <HorizontalScroll title="Popular" movie={popular} />
        <HorizontalScroll title="Top Rated" movie={topRated} />
        <HorizontalScroll title="Upcoming" movie={upcoming} />

      </View>
    </ScrollView>
    
    </GradientBackground>
  )
}
