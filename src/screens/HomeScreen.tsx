import React from 'react';
import { View, ActivityIndicator, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalScroll } from '../components/HorizontalScroll';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovies } from '../hooks/useMovies';


export const HomeScreen = () => {

  const { width: windowWidth } = Dimensions.get('window');

  const { top } = useSafeAreaInsets()

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  if( isLoading ){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color='blue' size={80}/>
      </View> 
    )
  }

  return (
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
          />
        </View>

        {/* At the Cinema */}
        <HorizontalScroll title="Popular" movie={popular} />
        <HorizontalScroll title="Top Rated" movie={topRated} />
        <HorizontalScroll title="Upcoming" movie={upcoming} />

      </View>
    </ScrollView>
  )
}
