import {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useRef, useState } from "react"
import { TouchableOpacity, View, Text, ScrollView } from "react-native"
import { RootStackParamList } from "../../type"
import ButtonRetro from "../components/ButtonRetro"
import MoneyCard from "../components/MoneyCard"
import TransactionBottomSheet from "../components/TransactionBottomSheet"
import TransactionItem, {
  TransactionItemProps
} from "../components/TransactionItem"

const dataTransaction: TransactionItemProps[] = [
  {
    amount: "200.000",
    type: "income",
    from: "Syahrul Ataufik",
    date: "04 Januari 2022 19:54"
  },
  {
    amount: "130.000",
    type: "expense",
    from: "Syahrul Ataufik",
    date: "05 Januari 2022 13:17"
  },
  {
    amount: "450.000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "06 Januari 2022 16:27"
  },
  {
    amount: "240.000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "07 Januari 2022 12:45"
  },
  {
    amount: "15.000",
    type: "expense",
    from: "Syahrul Ataufik",
    date: "08 Januari 2022 11:45"
  },
  {
    amount: "520.000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45"
  },
  {
    amount: "20.000",
    type: "expense",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45"
  },
  {
    amount: "520.000",
    type: "income",
    from: "Ulfa Dwi Nurul Octa",
    date: "08 Januari 2022 16:45"
  }
]
type Props = NativeStackScreenProps<RootStackParamList, "Home">
const HomeScreen: React.FC<Props> = props => {
  const { navigation } = props
  const [bottomSheetType, setBottomSheetType] = useState<string>("Income")
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])
  const openBottomSheet = (str: string) => {
    setBottomSheetType(str)
    handlePresentModalPress()
  }
  const renderListTransaction = () => {
    return dataTransaction.map(item => {
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
  return (
    <View className="flex pt-16 flex-col space-y-8 bg-slate-200 justify-start items-center h-full w-full dark:bg-slate-800">
      <BottomSheetModalProvider>
        <View className="flex flex-row justify-center items-center w-full h-fit ">
          <TouchableOpacity>
            <MoneyCard
              name={"TabungKuys"}
              amount={"2.435.000"}
              income={"3.200.000"}
              expense={"1.399.000"}
            />
          </TouchableOpacity>
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
          <ScrollView className="flex flex-col px-5 w-full h-full mt-3 mb-4">
            {renderListTransaction()}
          </ScrollView>
        </View>
        <TransactionBottomSheet
          innerRef={bottomSheetRef}
          type={bottomSheetType}
        />
      </BottomSheetModalProvider>
    </View>
  )
}
export default HomeScreen
