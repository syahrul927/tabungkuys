import { BottomSheetTextInput } from "@gorhom/bottom-sheet"
import { BottomSheetTextInputProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface InputBottomSheet extends BottomSheetTextInputProps {
  name: string
  titleShow?: boolean
}
const InputBottomSheet: React.FC<InputBottomSheet> = props => {
  const { name, titleShow, ...textInputProps } = props
  return (
    <View className="flex space-y-2 shadow-sm">
      {titleShow && (
        <Text className="text-lg font-bold capitalize">{name}</Text>
      )}
      <BottomSheetTextInput {...textInputProps} style={styles.textInput} />
    </View>
  )
}

export default InputBottomSheet
const styles = StyleSheet.create({
  textInput: {
    display: "flex",
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
  },
})
