import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ColorsConst } from "../utils/ColorConst"
import { moneyFormatter } from "../utils/StringUtils"
import RetroView from "./RetroView"
import UserIcon from "./UserIcon"

export interface TransactionItemProps {
  amount: string
  from: string
  type: "income" | "expense"
  date: string
}
const TransactionItem: React.FC<TransactionItemProps> = props => {
  const { amount, from, type, date } = props
  // const color = type === "income" ? "text-green-600" : "text-red-600"
  const color = "text-ret-black"
  return (
    <TouchableOpacity>
      <RetroView
        bg="bg-white"
        margin
        className="flex rounded-lg flex-row justify-start space-x-3 px-3 py-3"
      >
        <UserIcon name={from} />
        <View className="flex flex-col space-y-2 justify-start ">
          <Text className={`font-bold text-lg ${color}`}>
            {moneyFormatter(amount)}
          </Text>
          <Text className="text-md font-normal text-slate-500">{from}</Text>
        </View>
        <View className="flex justify-center space-y-2 items-end flex-1">
          <Text className={`${color} font-light text-lg capitalize`}>
            <FontAwesome
              name={type === "income" ? "arrow-up" : "arrow-down"}
              size={15}
            />{" "}
            {type}
          </Text>
          <Text className="text-md font-normal text-slate-500">{date}</Text>
        </View>
      </RetroView>
    </TouchableOpacity>
  )
}

export default TransactionItem
