import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const CityListCard = ({ data, onCardPress }) => {
  const status = data?.weather?.map((item) => item.main);

  return (
    <TouchableOpacity onPress={onCardPress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>{data?.name}</Text>
          <Text style={{ fontSize: 14 }}>{status[0]}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>{data?.main?.temp}°c</Text>
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: "rgba(0,0,0,0.2)" }} />
    </TouchableOpacity>
  );
};
