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

const App = () => {

  const [tabSelected, setTabSelected] = React.useState(1)

  const onTabSelect = (value) => {
    setTabSelected(value)
  }
  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <CustomTabs
        selectionMode={1}
        option1={"New"}
        option2={"Accepted"}
        option3={"Ongoing"}
        option4={"Completed"}
        onSelectSwitch={onTabSelect}
      />

      <Text>{tabSelected == 1 ? "This is it" : "This is it part 2"}</Text>
    </View>

  )
}

export default App

const styles = StyleSheet.create({})