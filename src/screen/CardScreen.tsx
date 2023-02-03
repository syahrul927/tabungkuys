import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { View } from "react-native"
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
    <SafeLayout className="w-full px-5 bg-white h-full flex flex-col justify-start items-center">
      <View className="flex flex-row justify-center w-full h-fit px-10 ">
        <MoneyCard name={name || "Your Card Name"} amount={val} />
      </View>
      <View className="flex flex-col w-full justify-around ">
        <InputRetro
          name="Card Name"
          titleShow
          placeholder="bank example bank"
          onChangeText={setName}
        />
        <InputRetro
          name="Description"
          titleShow
          placeholder="about this card"
          onChangeText={setDesc}
        />
      </View>
      <View className="flex flex-row flex-1">
        <TouchableOpacity onPress={navigation.goBack}>
          <ButtonRetro title="Cancel" bg="bg-ret-yellow" attr="w-full" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.goBack}>
          <ButtonRetro title="Submit" bg="bg-ret-purple" attr=" w-full" />
        </TouchableOpacity>
      </View>
    </SafeLayout>
  )
}

export default CardScreen
