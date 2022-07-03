import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const AnimatedScroll = () => {
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 70
  const maxHeaderHeight = 200

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  const size = scrollPosition.interpolate({
    inputRange: [0, 100, 200, 300, 400],
    outputRange: [20, 17, 15, 13, 11],
    extrapolate: 'clamp',
  });
  const imageHeight = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [100, 50],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });
  const imagePosition = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [(37 * Dimensions.get('window').width) / 100, 0],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });
  return (
    <SafeAreaView>
      <View>
        <Animated.View
          style={{
            // position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: 'lightblue',
          }}>
          <Animated.Text
            style={{
              opacity: opacity,
              fontSize: size,
            }}>
            Header
          </Animated.Text>
          <Animated.Image
            style={{
              height: imageHeight,
              width: imageHeight,
              borderRadius: imageHeight,
              transform: [{ translateX: imagePosition }],
            }}
            source={{
              uri:
                'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            }}
          />
        </Animated.View>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
            { useNativeDriver: false },
          )}
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.scrollView]}>
          {Array.from(Array(100), (e, key) => {
            return <Text key={key}>Item {key}</Text>;
          })}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default AnimatedScroll;