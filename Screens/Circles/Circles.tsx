import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Circles = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity activeOpacity={0.4}
          onPress={() => alert('buttonPressAction')}
        >
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

    </View>
  )
}

export default Circles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  outerCircle: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  }
})