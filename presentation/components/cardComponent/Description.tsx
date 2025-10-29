import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const Description = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text className="font-semibold">{movie.rating}</Text>
        <Text className="font-semibold"> - {movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-bold mt-5 text-2xl">Sinopsis</Text>
      <Text className="mt-2 text-lg">{movie.description}</Text>

      <Text className="font-bold mt-5 text-2xl">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default Description;
