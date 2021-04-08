import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Home/HomScreen";
import { CityDetails } from "./CityDetails/CityDetails";
import { primaryColor, whiteColor } from "../assets/colors";
import { SplashScreen } from "./Splash/SplashScreen";

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: whiteColor,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            title: "WeatherApp",
            headerLeft: () => null,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: "WeatherApp" }}
          name="CityDetails"
          component={CityDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
