import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { TransactionType } from "../constanta/TransactionType"

interface FilterTransactionTypeProps {
  selected?: string
  updateSelected?: (str: string) => void
}
const FilterTransactionType: React.FC<FilterTransactionTypeProps> = ({
  selected,
  updateSelected,
}) => {
  const renderType = () => {
    const list = Object.values(TransactionType)
    return list.map(item => {
      const id = (Math.random() + 1).toString(36).substring(7)
      const select = item.toLowerCase() === selected?.toLowerCase()
      return (
        <TouchableOpacity
          key={id}
          onPress={() => updateSelected?.(item)}
          className={`${select ? "bg-white" : ""} px-5 py-2 rounded-full`}
        >
          <Text
            className={`${
              select ? "font-bold text-black" : "font-semibold text-gray-400"
            } text-md capitalize`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )
    })
  }
  return (
    <View className="flex flex-row p-1 bg-gray-100 rounded-full ">
      {renderType()}
    </View>
  )
}
export default FilterTransactionType
