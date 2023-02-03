import React from "react"
import { ButtonProps, Text } from "react-native"
import RetroView from "./RetroView"

interface ButtonRetroProps extends ButtonProps {
  title: string
  bg: string
  textStyle?: string
  attr?: string
}
const ButtonRetro: React.FC<ButtonRetroProps> = ({
  title,
  bg,
  attr,
  textStyle,
}) => {
  return (
    <RetroView bg={bg} className={`rounded-md px-4 py-1 ${attr}`}>
      <Text className={textStyle}>{title}</Text>
    </RetroView>
  )
}
export default ButtonRetro
