import React from "react"
import { Text, TextInputProps, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

interface InputRetroProps extends TextInputProps {
  name: string
}
const InputRetro: React.FC<InputRetroProps> = props => {
  const { name, ...textInputProps } = props
  return (
    <View className="flex space-y-2">
      <Text className="text-lg font-bold capitalize">{name}</Text>
      <TextInput
        {...textInputProps}
        className="text-lg flex bg-white border-black border-2 rounded-full px-6 py-2 justify-center"
      />
    </View>
  )
}
export default InputRetro
