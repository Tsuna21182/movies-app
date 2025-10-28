import { router } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  return (
    <Pressable
      className={`active:opacity-80 px-2 ${className}`}
      key={id}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg w-full h-full"
        style={{
          width: smallPoster ? 90 : 160,
          height: smallPoster ? 130 : 250,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
