import { FontAwesome } from "@expo/vector-icons"
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import FilterTransactionType from "../components/FilterTransactionType"
import MoneyCard, { MoneyCardProps } from "../components/MoneyCard"
import SafeLayout from "../components/SafeLayout"
import TransactionBottomSheetSimple from "../components/TransactionBottomSheetSimple"
import TransactionItem, {
  TransactionItemProps,
} from "../components/TransactionItem"
import { TransactionType } from "../constanta/TransactionType"

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
    id: "1",
    name: "Bank Sendiri",
    amount: "243500",
  },
  {
    id: "2",
    name: "Bank Baca",
    amount: "1750000",
  },
]
type Props = NativeStackScreenProps<RootStackParamList, "Home">
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedTrans, setSelectedTrans] = useState<string>(
    TransactionType.ALL
  )
  const [bottomSheetType, setBottomSheetType] = useState<string>("Income")
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { width } = Dimensions.get("window")

  const [cards, setCards] = useState<MoneyCardProps[]>([])
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])
  const openBottomSheet = (str: string) => {
    setBottomSheetType(str)
    handlePresentModalPress()
  }
  const onChangeSelectedTrans = (str: string) => {
    setSelectedTrans(str)
  }
  const renderCardItem = () => {
    return cards.map(item => {
      const id = (Math.random() + 1).toString(36).substring(7)
      return (
        <TouchableOpacity
          key={id}
          onPress={() => navigation.navigate("DetailCard", { card: item.name })}
        >
          <MoneyCard
            id={item.id}
            name={item.name}
            amount={item.amount}
            incomeAction={openBottomSheet}
            expenseAction={openBottomSheet}
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
  const filterTransaction = useMemo(() => {
    if (selectedTrans.toLowerCase() === "all") return dataTransaction
    return dataTransaction.filter(item => item.type === selectedTrans)
  }, [selectedTrans])

  // Set UseEffect
  useEffect(() => {
    setCards(dataCards)
  }, [])
  useEffect(() => {
    setTransactions(filterTransaction)
  }, [selectedTrans, filterTransaction])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeLayout
        rightComponent={
          <TouchableOpacity onPress={() => navigation.push("Card")}>
            <FontAwesome name="plus-square-o" size={28} />
          </TouchableOpacity>
        }
        leftComponent={
          <Text className="text-3xl font-bold ">
            Cards{" "}
            <Text className="text-xs font-extralight">
              ({dataCards.length})
            </Text>
          </Text>
        }
        className="flex flex-col px-5 space-y-8 justify-start items-center"
      >
        <BottomSheetModalProvider>
          <View className="flex flex-row justify-center mb-10 items-center w-full h-fit ">
            <ScrollView
              horizontal // Change the direction to horizontal
              pagingEnabled // Enable paging
              decelerationRate={0} // Disable deceleration
              snapToInterval={width - 60}
              snapToAlignment="center" // Snap to the center
              contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
              }}
            >
              {renderCardItem()}
            </ScrollView>
          </View>
          <View className="flex flex-col justify-start items-center flex-1 space-y-5 w-full">
            <View className="flex flex-row justify-between items-center w-full">
              <Text className="font-bold text-lg">Last Transaction</Text>
            </View>

            <View className="flex flex-row justify-center items-center w-full">
              <FilterTransactionType
                selected={selectedTrans}
                updateSelected={onChangeSelectedTrans}
              />
            </View>
            <ScrollView className="flex flex-col w-full mt-3 mb-4  rounded-lg">
              {renderListTransaction()}
            </ScrollView>
          </View>
          <TransactionBottomSheetSimple
            ref={bottomSheetRef}
            type={bottomSheetType}
          />
        </BottomSheetModalProvider>
      </SafeLayout>
    </GestureHandlerRootView>
  )
}
export default HomeScreen
