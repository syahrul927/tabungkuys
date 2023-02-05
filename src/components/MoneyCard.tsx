import React from "react"
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import RetroView from "./RetroView"
import MoneyFormat from "./MoneyFormat"

export interface MoneyCardProps {
  id: string
  name: string
  amount: string
  incomeAction?: (str: string) => void | undefined
  expenseAction?: (str: string) => void | undefined
}
const { width } = Dimensions.get("window")
const MoneyCard = ({
  id,
  name,
  amount,
  incomeAction,
  expenseAction,
}: MoneyCardProps) => {
  return (
    <View key={id} style={styles.container}>
      <RetroView
        bg="bg-ret-yellow"
        className={`flex flex-col w-full h-full space-y-2 justify-around items-start py-2 px-5 rounded-2xl `}
      >
        <Text className="text-xl font-bold text-black">{name}</Text>
        <View>
          <Text className="text-gray-600 tracking-tighter">Total Balance</Text>
          <MoneyFormat sizeMon="text-xl" sizeRp="text-normal" amount={amount} />
        </View>
        <View className="flex flex-row justify-between w-full">
          <TouchableOpacity onPress={() => incomeAction?.("Income")}>
            <View className="flex flex-col items-center justify-center bg-ret-black rounded-full px-8 py-3">
              <Text className="text-white text-md font-normal">
                <FontAwesome name="arrow-up" size={14} /> Income
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => expenseAction?.("Exepense")}>
            <View className="flex flex-col items-center justify-center bg-ret-dark-yellow rounded-full px-8 py-3">
              <Text className="text-ret-black text-md font-normal  ">
                <FontAwesome name="arrow-down" size={14} /> Expense
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </RetroView>
    </View>
  )
}

export default MoneyCard

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    height: 200,
    borderRadius: 10,
  },
})
