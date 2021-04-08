import React, { useEffect } from "react";
import { View, Image } from "react-native";

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ height: 130, width: 130 }}
        resizeMode="contain"
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
};
