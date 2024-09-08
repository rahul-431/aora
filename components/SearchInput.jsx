import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
const SearchInput = ({ title, value, handleChangeText }) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl focus:border focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-white text-base mt-0.5 flex-1 font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
