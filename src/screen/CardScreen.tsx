import React, { useCallback, useMemo, useRef } from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import { RootStackParamList } from "../../type"
import ButtonRetro from "../components/ButtonRetro"

const CardScreen: React.FC = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ["20%", "50%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index < 1) {
      bottomSheetRef.current?.close()
    }
  }, [])

  // renders
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
        <ButtonRetro title="Open" bg="bg-white" />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
})

export default CardScreen
