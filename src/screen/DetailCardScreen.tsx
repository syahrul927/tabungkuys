import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useEffect, useMemo, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from "react-native-select-dropdown"
import { RootStackParamList } from "../../type"
import FilterTransactionType from "../components/FilterTransactionType"
import ListTransactionItem from "../components/ListTransactionItem"
import MoneyFormat from "../components/MoneyFormat"
import SafeLayout from "../components/SafeLayout"
import { TransactionItemProps } from "../components/TransactionItem"
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
const colors = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
]
const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
}
const data = [
  {
    name: "Syahrul Ataufik",
    total: 15000,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    name: "Ulfa Dwi Nurul Octa",
    total: 120000,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    name: "Chobby",
    total: 30000,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    name: "Jessy",
    total: 25000,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
]
type Props = NativeStackScreenProps<RootStackParamList, "DetailCard">
type TabType = "income" | "expense"
interface TabProps {
  tab: TabType
  onChangeTab: (tabType: TabType) => void
}
const years = [2023, 2022, 2021]
const DetailCardScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedTrans, setSelectedTrans] = useState<string>(
    TransactionType.ALL
  )
  const [transactions, setTransactions] =
    useState<TransactionItemProps[]>(dataTransaction)
  const [selectedYear, setSelectedYear] = useState<number>(years[0])
  const [tab, setTab] = useState<TabType>("income")
  const onChangeTab = (type: TabType) => {
    setTab(type)
  }
  const [chartParentWidth, setChartParentWidth] = useState(0)

  const onChangeSelectedTrans = (str: string) => {
    setSelectedTrans(str)
  }
  const filterTransaction = useMemo(() => {
    if (selectedTrans.toLowerCase() === "all") return dataTransaction
    return dataTransaction.filter(item => item.type === selectedTrans)
  }, [selectedTrans])
  useEffect(() => {
    setTransactions(filterTransaction)
  }, [selectedTrans, filterTransaction])
  return (
    <SafeLayout
      leftComponent={"Detail Card"}
      goBack={() => navigation.goBack()}
      className="w-full px-5 h-full flex flex-col justify-start items-center space-y-5"
    >
      <View className=" flex flex-col justify-center bg-white rounded-xl shadow-md items-center w-full px-10 py-5 mt-5 ">
        <View className="flex flex-col w-full">
          <View className="flex flex-row justify-between w-full items-center">
            <Text className="text-lg text-gray-700">Your Balance</Text>
            <SelectDropdown
              data={years}
              buttonStyle={{
                width: "30%",
                height: 30,
                paddingVertical: 0,
                backgroundColor: undefined,
                borderColor: "#374151",
                borderWidth: 1,
                borderRadius: 5,
              }}
              buttonTextStyle={{
                fontSize: 15,
              }}
              dropdownStyle={{
                borderRadius: 5,
              }}
              defaultValue={selectedYear}
              onSelect={(selectedItem, index) => {
                // todo
              }}
            />
          </View>
          <MoneyFormat amount="240000" sizeRp="text-3xl " sizeMon="text-3xl" />
        </View>
        <View
          className="flex w-full shadow-gray-800 rounded-lg"
          onLayout={({ nativeEvent }) =>
            setChartParentWidth(nativeEvent.layout.width)
          }
        >
          <PieChart
            data={data}
            width={chartParentWidth - 10}
            height={200}
            chartConfig={chartConfig}
            accessor={"total"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
            absolute
          />
        </View>
      </View>
      <View className="flex w-full justify-center items-center">
        <FilterTransactionType
          selected={selectedTrans}
          updateSelected={onChangeSelectedTrans}
        />
      </View>
      <ScrollView className="flex flex-col w-full mt-3 mb-4  rounded-lg">
        <ListTransactionItem list={transactions} />
      </ScrollView>
    </SafeLayout>
  )
}
export default DetailCardScreen

const Tab: React.FC<TabProps> = props => {
  const { tab, onChangeTab } = props
  return (
    <View className="flex mt-5 px-1 py-1 bg-ret-light-gray flex-row w-full items-center justify-center rounded-full">
      <TouchableOpacity onPress={() => onChangeTab("income")}>
        <View
          className={`flex flex-row justify-center items-center px-4 py-2 w-[90%] translate-x-7 rounded-full ${
            tab === "income" ? "bg-white" : ""
          }`}
        >
          <Text>Income</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeTab("expense")}>
        <View
          className={`flex flex-row justify-center items-center px-4 py-2 w-[90%] rounded-full -translate-x-3 ${
            tab === "expense" ? "bg-white" : ""
          }`}
        >
          <Text>Expense</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
