import React from "react"
import { Text } from "react-native"
import { moneyFormatter } from "../utils/StringUtils"

interface MoneyFormatProps {
  amount: string
  sizeRp: string
  sizeMon: string
}
const MoneyFormat: React.FC<MoneyFormatProps> = props => {
  const { amount, sizeRp, sizeMon } = props
  const fixAmount = moneyFormatter(amount)
  return (
    <Text className={`w-full`}>
      <Text className={` ${sizeRp}`}>Rp</Text>
      <Text className={`${sizeMon} font-bold`}>{fixAmount}</Text>
      <Text className={` ${sizeRp}`}>,00</Text>
    </Text>
  )
}
export default MoneyFormat
