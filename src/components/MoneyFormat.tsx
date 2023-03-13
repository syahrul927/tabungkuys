import React from "react"
import { Text, View } from "react-native"
import { moneyFormatter } from "../utils/StringUtils"

interface MoneyFormatProps {
  amount: string
  sizeRp?: string
  sizeMon?: string
}
const MoneyFormat: React.FC<MoneyFormatProps> = props => {
  const { amount, sizeRp, sizeMon } = props
  const fixAmount = moneyFormatter(amount)
  return (
    <View className={`w-full flex flex-row items-end`}>
      <Text className={` ${sizeRp}`}>Rp</Text>
      <Text className={`${sizeMon} font-bold`}>{fixAmount}</Text>
      <Text className={` ${sizeRp}`}>,00</Text>
    </View>
  )
}
export default MoneyFormat
