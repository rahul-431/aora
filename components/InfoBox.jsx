import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, subtitle, containerStyle, titleStyle }) => {
  return (
    <View className={containerStyle}>
      <Text className={`text-white text-center font-psemibold ${titleStyle}`}>
        {title}
      </Text>
      <Text className={`text-gray-100 text-sm text-center font-pregular`}>
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;