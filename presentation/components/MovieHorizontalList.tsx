import { movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";

import MoviePoster from "./MoviePoster";

interface Props {
  movies: movie[];
  title?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndClosed =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndClosed) return;

    isLoading.current = true;

    //TODO:
    console.log("cargar siguientes peliculas");
    loadNextPage && loadNextPage();
  };

  return (
    <View>
      <Text className="text-2xl  px-4 mb-2">{title}</Text>

      <FlatList
        horizontal
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={movies}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
