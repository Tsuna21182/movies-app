import React from "react";
import { Pressable, Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex justify-center items-center gap-5">
      <Text className="text-4xl">hola mundo</Text>
      <Pressable
        onPress={() => alert("¡Diste click!")}
        className="bg-blue-400 p-2 rounded-md active:opacity-85"
      >
        <Text className="text-white font-bold text-3xl">Dame click</Text>
      </Pressable>
    </View>
  );
};

export default App;
