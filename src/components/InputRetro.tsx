import React from "react"
import { Text, TextInput, TextInputProps, View } from "react-native"

interface InputRetroProps extends TextInputProps {
  name: string
  titleShow?: boolean
}
const InputRetro: React.FC<InputRetroProps> = props => {
  const { name, titleShow, ...textInputProps } = props
  return (
    <View className="flex space-y-2 shadow-sm">
      {titleShow && <Text className="text-lg font-bold">{name}</Text>}
      <TextInput
        {...textInputProps}
        className=" flex bg-white rounded-lg px-6 py-4 justify-center"
      />
    </View>
  )
}
export default InputRetro
