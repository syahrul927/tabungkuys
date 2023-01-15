import React from "react"
import { ButtonProps, Text } from "react-native"
import RetroView from "./RetroView"

interface ButtonRetroProps {
  title: string
  bg: string
  attr?: string
}
const ButtonRetro: React.FC<ButtonRetroProps> = ({ title, bg, attr }) => {
  return (
    <RetroView
      bg={bg}
      className={`border-black border rounded-full px-4 py-1 ${attr}`}
    >
      <Text>{title}</Text>
    </RetroView>
  )
}
export default ButtonRetro