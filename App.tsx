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
import CustomTab from './Screens/CustomTabs'
import CustomTabs from './Screens/CustomTabs/CustomTabs'
import CalenderAlarm from './Screens/CalenderAlarm'
import SimpleAlarm from './Screens/SimpleAlarm'
import TimeCounter from './Screens/TimeCounter'

const App = () => {

  const [tabSelected, setTabSelected] = React.useState(1)

  const onTabSelect = (value) => {
    setTabSelected(value)
  }
  return (
    <TimeCounter />

  )
}

export default App

const styles = StyleSheet.create({})