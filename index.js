/**
 * @format
 */

import { AppRegistry, Platform } from "react-native";
import { App } from "./App";
import { name as appName } from "./app.json";
import PushNotification from "react-native-push-notification";

console.log("is this even working");
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  // onRegistrationError: function(err) {
  //   console.error(err.message, err);
  // },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === "ios",
});

AppRegistry.registerComponent(appName, () => App);
