import { FontAwesome } from "@expo/vector-icons"
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { TouchableOpacity, View, Text, ScrollView } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import ButtonRetro from "../components/ButtonRetro"
import MoneyCard, { MoneyCardProps } from "../components/MoneyCard"
import SafeLayout from "../components/SafeLayout"
import TransactionBottomSheet from "../components/TransactionBottomSheet"
import TransactionItem, {
  TransactionItemProps,
} from "../components/TransactionItem"

const dataTransaction: TransactionItemProps[] = [
  {
    amount: "200000",
    type: "income",
    from: "Syahrul Ataufik",
    date: "04 Januari 2022 19:54",
  },
  {
    amount: "130000",
    type: "expense",
    from: "Syahrul Ataufik",
    date: "05 Januari 2022 13:17",
  },
  {
    amount: "450000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "06 Januari 2022 16:27",
  },
  {
    amount: "240000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "07 Januari 2022 12:45",
  },
  {
    amount: "15000",
    type: "expense",
    from: "Syahrul Ataufik",
    date: "08 Januari 2022 11:45",
  },
  {
    amount: "520000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45",
  },
  {
    amount: "20000",
    type: "expense",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45",
  },
  {
    amount: "520000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45",
  },
]
const dataCards: MoneyCardProps[] = [
  {
    name: "Bank Sendiri",
    amount: "243500",
    income: "3200000",
    expense: "139900",
  },
  {
    name: "Bank Baca",
    amount: "1750000",
    income: "2000000",
    expense: "59000",
  },
]
type Props = NativeStackScreenProps<RootStackParamList, "Home">
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [bottomSheetType, setBottomSheetType] = useState<string>("Income")
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const [cards, setCards] = useState<MoneyCardProps[]>([])
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])
  const openBottomSheet = (str: string) => {
    setBottomSheetType(str)
    handlePresentModalPress()
  }
  const renderCardItem = () => {
    return cards.map(item => {
      const id = (Math.random() + 1).toString(36).substring(7)
      return (
        <TouchableOpacity key={id}>
          <MoneyCard
            name={item.name}
            amount={item.amount}
            income={item.income}
            expense={item.expense}
          />
        </TouchableOpacity>
      )
    })
  }
  const renderListTransaction = () => {
    return transactions.map(item => {
      const id = (Math.random() + 1).toString(36).substring(7)
      return (
        <TransactionItem
          amount={item.amount}
          type={item.type}
          from={item.from}
          date={item.date}
          key={id}
        />
      )
    })
  }
  // Set UseEffect
  useEffect(() => {
    setCards(dataCards)
    setTransactions(dataTransaction)
  }, [])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeLayout className="flex flex-col px-5 space-y-8 bg-slate-200 justify-start items-center h-full w-full dark:bg-slate-800">
        <View className="flex flex-row justify-between items-center w-full ">
          <Text className="text-3xl font-bold ">
            Cards{" "}
            <Text className="text-xs font-extralight">
              ({dataCards.length})
            </Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.push("Card")}>
            <FontAwesome name="plus-square-o" size={28} />
          </TouchableOpacity>
        </View>
        <BottomSheetModalProvider>
          <View className="flex flex-row justify-center items-center w-full h-fit px-10 ">
            <ScrollView
              className="w-full"
              horizontal // Change the direction to horizontal
              pagingEnabled // Enable paging
              decelerationRate={0} // Disable deceleration
              snapToAlignment="center" // Snap to the center
            >
              {renderCardItem()}
            </ScrollView>
          </View>
          <View className="flex flex-row justify-center w-full">
            <TouchableOpacity onPress={() => openBottomSheet("Income")}>
              <ButtonRetro bg="bg-green-300" title="Income" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openBottomSheet("Expense")}>
              <ButtonRetro bg="bg-red-300" title="Expense" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-col justify-start items-center flex-1 w-full">
            <View className="flex flex-row justify-between items-center w-full px-5">
              <Text className="font-bold text-lg">Last Transaction</Text>
              <TouchableOpacity>
                <ButtonRetro bg="bg-yellow-400" title="View All" />
              </TouchableOpacity>
            </View>
            <ScrollView className="flex flex-col w-full h-full mt-3 mb-4">
              {renderListTransaction()}
            </ScrollView>
          </View>
          <TransactionBottomSheet
            innerRef={bottomSheetRef}
            type={bottomSheetType}
          />
        </BottomSheetModalProvider>
      </SafeLayout>
    </GestureHandlerRootView>
  )
}
export default HomeScreen
