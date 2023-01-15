import React from "react"
import { Text, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import RetroView from "./RetroView"

interface MoneyCardProps {
  name: string
  amount: string
  income: string
  expense: string
}
const MoneyCard = ({ name, amount, income, expense }: MoneyCardProps) => {
  return (
    <RetroView
      bg="bg-white"
      className="flex h-fit space-y-2 px-10 justify-center items-center py-5 rounded-lg "
    >
      <Text className="text-xl font-normal text-black">{name}</Text>
      <Text className="text-3xl font-bold text-black">Rp. {amount}</Text>
      <View className="flex flex-row space-x-5">
        <View className="flex flex-col items-start">
          <Text className="text-green-600 text-xs font-light">
            <FontAwesome name="arrow-up" size={10} /> Income
          </Text>
          <Text className="text-green-600 text-sm font-semibold">
            Rp. {income}
          </Text>
        </View>
        <View className="flex flex-col items-start">
          <Text className="text-red-600 text-xs font-light ">
            <FontAwesome name="arrow-down" size={10} /> Expense
          </Text>
          <Text className="text-red-600 text-sm font-semibold">
            Rp. {expense}
          </Text>
        </View>
      </View>
    </RetroView>
  )
}

export default MoneyCard