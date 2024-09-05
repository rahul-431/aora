import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">Welcome to the index page</Text>
      <Text className="text-2xl">Welcome to the index page</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile</Link>
    </View>
  );
};

export default Index;
