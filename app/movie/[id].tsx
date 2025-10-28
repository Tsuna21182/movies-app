import Header from "@/presentation/components/cardComponent/Header";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { getMovieByID } = useMovies(+id);

  if (getMovieByID.isLoading || !getMovieByID.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-5">Espere Por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Header
        originalTitle={getMovieByID.data.originalTitle}
        poster={getMovieByID.data.poster}
        title={getMovieByID.data.title}
      />
    </ScrollView>
  );
};

export default MovieScreen;
