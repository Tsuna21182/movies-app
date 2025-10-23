import { movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";

import MoviePoster from "./MoviePoster";

interface Props {
  movies: movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>

      <FlatList
        horizontal
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item) => `${item.id}`}
        data={movies}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
