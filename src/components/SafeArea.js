import React, { useCallback } from "react";
import { useWindowDimensions, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { statusBarColor, whiteColor } from "../assets/colors";

export const WSafeArea = ({
  children,
  headerVisible = true,
  exit = false,
  ...rest
}) => {
  const height = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]} {...rest}>
      <StatusBar backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: whiteColor,
  },
});
