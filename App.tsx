import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from './Screens/BottomSheet'
import BottomTabs from './Screens/BottomTabs'
import OnboardingScreen from './Screens/OnboardingScreen'
import Circles from './Screens/Circles'
import CountDownCircle from './Screens/CountDownCircle'
import Graphs from './Screens/Graphs'
import Alarm from './Screens/Alarm'
import Signature from './Screens/Signature'

const App = () => {
  return (

    <Signature text={''} onOK={function (signature: any): void {
      throw new Error('Function not implemented.')
    }} />

  )
}

export default App

const styles = StyleSheet.create({})