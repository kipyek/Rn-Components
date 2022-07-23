import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomTabs from '.'

const CustomTab = () => {
  const [tabSelected, setTabSelected] = useState(1)

  const onTabSelect = (value) => {
    setTabSelected(value)
  }
  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <CustomTabs
        selectionMode={1}
        option1={"Pickup"}
        option2={"Destination"}
        onSelectSwitch={onTabSelect}
      />
    </View>


  )
}

export default CustomTab

const styles = StyleSheet.create({})