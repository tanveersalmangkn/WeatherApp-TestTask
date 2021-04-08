import PushNotification from "react-native-push-notification";

export const showLocalNotification = (title, message) => {
  PushNotification.localNotification({
    title,
    message,
    vibrate: true,
  });
};
