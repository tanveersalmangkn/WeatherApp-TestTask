import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  Platform,
} from "react-native";
import { WSafeArea } from "../../components";
import { useQuery, useQueryClient } from "react-query";
import { http } from "../../utils/http";
import { citiesListApi } from "../../utils/endPoints";
import { CityListCard } from "../../components/CityListCard";
import { showLocalNotification } from "../../utils/handleNotification";
import { useGlobalContext } from "../../utils/Store/useContextApi";
import Geolocation from "@react-native-community/geolocation";

export const HomeScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { cityList, setCityList } = useGlobalContext();
  const [currentLocationInfo, setCurrentLocationInfo] = useState(null);

  useEffect(() => {
    showLocalNotification(
      currentLocationInfo?.main?.temp,
      currentLocationInfo?.name
    );
  }, [currentLocationInfo]);

  const retry = () => {
    queryClient.invalidateQueries("citiesList");
  };

  useEffect(() => {
    const getCurrentLocationCoord = () =>
      Geolocation.getCurrentPosition(async (info) => {
        const { latitude, longitude } = info.coords;
        const res = await http.get(
          `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bd21135b866dbdf7f214c57b84af4e82`
        );
        setCurrentLocationInfo(res?.data);
      });
    getCurrentLocationCoord();
  }, []);

  const { data, isLoading, isError } = useQuery(
    "citiesList",
    async () => await http.get(citiesListApi),
    {
      onSuccess: (data) => setCityList(data?.data?.list),
      enabled: true,
      retry: false,
      refetchOnReconnect: true,
    }
  );

  if (isLoading) {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator color="gray" size="large" />
        <Text style={{ textAlign: "center" }}>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        marginHorizontal={20}
      >
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Something went wrong. Check your internet connection and try again.
        </Text>
        <Button title="Retry" onPress={retry} />
      </View>
    );
  }

  return (
    <WSafeArea>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cityList || []}
        renderItem={({ item }) => {
          return (
            <CityListCard
              data={item}
              onCardPress={() => navigation.navigate("CityDetails", { item })}
            />
          );
        }}
      />
    </WSafeArea>
  );
};
