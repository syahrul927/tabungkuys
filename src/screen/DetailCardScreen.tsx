import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import SafeLayout from "../components/SafeLayout"

type Props = NativeStackScreenProps<RootStackParamList, "DetailCard">
type TabType = "income" | "expense"
const DetailCardScreen: React.FC<Props> = ({ route, navigation }) => {
  const [tab, setTab] = useState<TabType>("income")
  const onChangeTab = (type: TabType) => {
    setTab(type)
  }
  return (
    <SafeLayout
      leftComponent={"Detail Card"}
      goBack={() => navigation.goBack()}
      className="w-full px-5 h-full bg- flex flex-col justify-start items-center"
    >
      <View className="flex justify-center items-center w-full px-10 py-5">
        <View className="flex px-1 py-1 bg-ret-light-gray flex-row w-full items-center justify-center rounded-full">
          <TouchableOpacity onPress={() => onChangeTab("income")}>
            <View
              className={`flex flex-row justify-center items-center p-4 w-[90%] translate-x-7 rounded-full ${
                tab === "income" ? "bg-white" : ""
              }`}
            >
              <Text>Income</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab("expense")}>
            <View
              className={`flex flex-row justify-center items-center p-4 w-[90%] rounded-full -translate-x-3 ${
                tab === "expense" ? "bg-white" : ""
              }`}
            >
              <Text>Expense</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1">
        <Text>Detail Screen Mas Bro</Text>
      </View>
    </SafeLayout>
  )
}
export default DetailCardScreen
