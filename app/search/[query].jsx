import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { StatusBar } from "expo-status-bar";
import { useAppwrite } from "../../lib/useAppwrite";
import { searchPosts } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: searchResult, refetch } = useAppwrite(() => searchPosts(query));
  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <>
      <SafeAreaView className="bg-primary  h-full">
        <FlatList
          data={searchResult ?? []}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => <VideoCard post={item} />}
          ListHeaderComponent={() => (
            <View className="my-6 px-4">
              <Text className="font-pmedium text-sm text-gray-100">
                Search Results
              </Text>
              <Text className="text-2xl font-psemibold text-gray-100">
                {query}
              </Text>
              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} />
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Videos found"
              subtitle="No videos found for this search"
            />
          )}
        />
      </SafeAreaView>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default Search;
