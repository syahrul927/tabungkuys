import { BottomSheetTextInput } from "@gorhom/bottom-sheet"
import React from "react"
import { Text, TextInputProps, View } from "react-native"

interface InputBottomSheetProps extends TextInputProps {
  name: string
}
const InputBottomSheet: React.FC<InputBottomSheetProps> = props => {
  const { name, ...textInputProps } = props
  return (
    <View className="flex space-y-2">
      <Text className="text-lg font-bold capitalize">{name}</Text>
      <View className="flex bg-white border-black border-2 rounded-full px-6 py-2 justify-center">
        <BottomSheetTextInput {...textInputProps} className="text-lg" />
      </View>
    </View>
  )
}
export default InputBottomSheet
