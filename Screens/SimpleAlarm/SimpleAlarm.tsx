import { View, Text } from 'react-native'
import React from 'react'
import { createAlarm } from 'react-native-simple-alarm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SimpleAlarm = async () => {
  try {
    await createAlarm({
      active: false,
      date: new Date().toISOString(),
      message: 'message',
      snooze: 1,
    });
  } catch (e) {
    console.log(e)
  }

  return (
    <View>
      <Text>SimpleAlarm</Text>
    </View>
  )
}
export default SimpleAlarm