import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import ButtonDetail from "../components/ButtonDetail"
import ButtonRetro from "../components/ButtonRetro"
import InputRetro from "../components/InputRetro"
import MoneyCard from "../components/MoneyCard"
import SafeLayout from "../components/SafeLayout"

type Props = NativeStackScreenProps<RootStackParamList, "Card">
const CardScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>("")
  const actionMember = () => {
    // todo
  }
  const detailOnPress = () => {
    navigation.push("CardMemberScreen", {
      member: [],
      actionMember,
    })
  }
  return (
    <SafeLayout
      goBack={navigation.goBack}
      leftComponent={"New Card"}
      className="w-full px-5 bg-white h-full flex flex-col justify-start items-center"
    >
      <View className="flex flex-row justify-center w-full h-fit">
        <MoneyCard id={"0"} name={name || "Your Card Name"} amount={"0"} />
      </View>
      <View className="flex px-5 flex-col w-full justify-around ">
        <View className="m-3">
          <InputRetro
            titleShow
            name="Card Name"
            placeholder="Your Card Name"
            onChangeText={e => setName(e)}
          />
        </View>
        <ButtonDetail
          icon={<MaterialIcons name="people" size={14} />}
          bg="bg-ret-green"
          name="Members"
          onPress={detailOnPress}
        />
      </View>
      <View className="flex w-full h- rounded-lg px-5">
        <TouchableOpacity onPress={navigation.goBack}>
          <ButtonRetro
            bg="bg-ret-black"
            attr="py-3 flex justify-center items-center"
            textStyle="text-white font-semibold text-lg"
            title="Save"
          />
        </TouchableOpacity>
      </View>
    </SafeLayout>
  )
}

export default CardScreen
