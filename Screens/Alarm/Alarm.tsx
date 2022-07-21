import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const Alarm = () => {

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return statusObj;
    }).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        return;
      }
    })
  }, [])

  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You’ve got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" }
      },
      trigger: { seconds: 60 },
    });
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Alarm</Text>
      <Button onPress={() => triggerNotifications()} title="Trigger Local Notifications" color="#841584" accessibilityLabel="Trigger Local Notifications" />
    </View>
  )
}

export default Alarm

const styles = StyleSheet.create({})