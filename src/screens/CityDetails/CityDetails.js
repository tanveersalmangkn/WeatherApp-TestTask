import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { WSafeArea } from "../../components";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const CityDetails = ({ route }) => {
  const details = route?.params?.item;

  const [region, setRegion] = useState({
    latitude: details?.coord?.lat,
    longitude: details?.coord?.lon,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  const status = details.weather.map((item) => item.main);

  console.log({ details });

  const onRegionChange = () => {
    setRegion(region);
  };

  return (
    <WSafeArea>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        // onRegionChange={onRegionChange}
      />
      <View margin={15}>
        <View style={{ flexDirection: "row" }}>
          <View flex={2}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {details.name}
            </Text>
            <Text style={styles.textStyle}>{status[0]}</Text>

            <Text style={styles.textStyle}>
              Humidity: {details.main.humidity}
            </Text>
            <Text style={styles.textStyle}>
              Wind Speed: {details.wind.speed}
            </Text>
            <Text style={styles.textStyle}>
              Max. Temp: {details.main.temp_max}° c
            </Text>
            <Text style={styles.textStyle}>
              Min. Temp: {details.main.temp_min}° c
            </Text>
          </View>
          <View flex={1} justifyContent="center">
            <Text style={{ fontSize: 20 }}>{details.main.temp}° c</Text>
            <Image
              source={require("../../assets/images/weather.png")}
              style={{ height: 90, width: 90 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </WSafeArea>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    marginTop: 3,
  },

  map: {
    height: height / 1.8,
    width,
    // zIndex: 100,
    // ...StyleSheet.absoluteFillObject,
    // flex: 1,
  },
});
