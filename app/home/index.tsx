import MainSlideshow from "@/presentation/components/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, bestRatedQuery, comingSoonQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: safeArea.top,
          backgroundColor: "white",
          flex: 1,
          paddingBottom: 10,
        }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <View className="flex gap-5">
          <MovieHorizontalList
            movies={popularQuery.data ?? []}
            title="Populares"
          />
          <MovieHorizontalList
            movies={bestRatedQuery.data?.pages.flat() ?? []}
            title="Mejor Calificadas"
            loadNextPage={bestRatedQuery.fetchNextPage}
          />
          <MovieHorizontalList
            movies={comingSoonQuery.data ?? []}
            title="Próximamente en cines"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
