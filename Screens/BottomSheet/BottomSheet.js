//install expo install react-native-gesture-handler
//install expo install react-native-reanimated
// install yarn add @gorhom/bottom-sheet
//install expo install react-native-safe-area-context
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';

const App = () => {

  const bottomSheetRef = useRef < BottomSheet > (null);
  // variables
  const snapPoints = useMemo(() => ['24%', '50%', '90%'], []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        useRef={bottomSheetRef} // change useRef to ref
        snapPoints={snapPoints}
        handleIndicatorStyle={{ width: 35, backgroundColor: 'red' }}

      >
        <BottomSheetScrollView>
          <Text>Yes</Text>

        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
