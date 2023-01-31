import React from "react"
import { Text, TextInputProps, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

interface InputRetroProps extends TextInputProps {
  name: string
  titleShow?: boolean
}
const InputRetro: React.FC<InputRetroProps> = props => {
  const { name, titleShow, ...textInputProps } = props
  return (
    <View className="flex space-y-2">
      {titleShow && (
        <Text className="text-lg font-bold capitalize">{name}</Text>
      )}
      <TextInput
        {...textInputProps}
        className=" flex bg-ret-light-gray rounded-lg px-6 py-4 justify-center"
      />
    </View>
  )
}
export default InputRetro
