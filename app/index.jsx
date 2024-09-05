import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl font-black">Welcome to the index page</Text>
      <Text className="text-2xl">Welcome to the index page</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to Home</Link>
    </View>
  );
};

export default Index;
