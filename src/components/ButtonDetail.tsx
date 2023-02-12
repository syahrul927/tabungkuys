import { MaterialIcons } from "@expo/vector-icons"
import React, { ReactNode } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import RetroView from "./RetroView"

interface ButtonDetailProps {
  bg: string
  name: string
  onPress: () => void
  icon: ReactNode
}

const ButtonDetail: React.FC<ButtonDetailProps> = ({
  bg,
  name,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RetroView
        bg={bg}
        margin
        className="p-3 rounded-xl flex flex-row space-x-3 items-center"
      >
        <View className="bg-white flex justify-center items-center w-7 h-7 rounded-full">
          {icon}
        </View>
        <Text className="text-md flex-1">{name}</Text>
        <MaterialIcons name="arrow-right" size={24} />
      </RetroView>
    </TouchableOpacity>
  )
}
export default ButtonDetail
