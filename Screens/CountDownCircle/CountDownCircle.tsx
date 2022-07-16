//install yarn add react-native-svg
// install yarn add react-native-countdown-circle-timer
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={100}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[100, 60, 30, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
      >
        {({ remainingTime, color }) => (
          <Text style={{ color, fontSize: 40 }}>
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
      <View style={{ marginTop: 60 }}>
        <Button title={isPlaying ? "  Stop  " : "  Start  "} onPress={() => setIsPlaying(prev => !prev)} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});