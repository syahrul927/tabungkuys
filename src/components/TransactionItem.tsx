import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import RetroView from "./RetroView"

export interface TransactionItemProps {
  amount: string
  from: string
  type: "income" | "expense"
  date: string
}
const TransactionItem: React.FC<TransactionItemProps> = props => {
  const { amount, from, type, date } = props
  const color = type === "income" ? "text-green-600" : "text-red-600"
  return (
    <TouchableOpacity>
      <RetroView
        bg="bg-white"
        className="flex rounded-lg flex-row justify-between px-5  border-black border py-3"
      >
        <View className="flex flex-col space-y-2 justify-start ">
          <Text
            className={`font-bold text-lg ${color}`}
          >{`Rp. ${amount}`}</Text>
          <Text className="text-md font-light text-slate-500">{from}</Text>
        </View>
        <View className="flex justify-center space-y-2 items-end">
          <Text className={`${color} font-light text-lg capitalize`}>
            <FontAwesome
              name={type === "income" ? "arrow-up" : "arrow-down"}
              size={15}
            />{" "}
            {type}
          </Text>
          <Text className="text-md font-light text-slate-500">{date}</Text>
        </View>
      </RetroView>
    </TouchableOpacity>
  )
}

export default TransactionItem
