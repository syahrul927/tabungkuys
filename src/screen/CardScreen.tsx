import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import ButtonRetro from "../components/ButtonRetro"
import InputRetro from "../components/InputRetro"
import MoneyCard from "../components/MoneyCard"
import SafeLayout from "../components/SafeLayout"

type Props = NativeStackScreenProps<RootStackParamList, "Card">
const CardScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>("")
  const [desc, setDesc] = useState<string>("")
  const val = "0"
  return (
    <SafeLayout className="w-full px-5 bg-slate-200 h-full flex flex-col justify-start items-center">
      <View className="w-full px-10 mb-5">
        <MoneyCard
          name={name || "Your Card Name"}
          amount={val}
          income={val}
          expense={val}
        />
      </View>
      <View className="flex flex-col w-full ">
        <InputRetro
          name="Card Name"
          placeholder="bank example bank"
          onChangeText={setName}
        />
        <InputRetro
          name="Description"
          placeholder="about this card"
          onChangeText={setDesc}
        />
      </View>
      <View className="flex flex-row ">
        <TouchableOpacity onPress={navigation.goBack}>
          <ButtonRetro title="Cancel" bg="bg-yellow-300" attr="w-full" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.goBack}>
          <ButtonRetro title="Submit" bg="bg-green-300" attr=" w-full" />
        </TouchableOpacity>
      </View>
    </SafeLayout>
  )
}

export default CardScreen
