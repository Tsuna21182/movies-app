import MainSlideshow from "@/presentation/components/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View
      style={{ paddingTop: safeArea.top, backgroundColor: "white", flex: 1 }}
    >
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
      <MovieHorizontalList movies={popularQuery.data ?? []} title="Populares" />
    </View>
  );
};

export default HomeScreen;
