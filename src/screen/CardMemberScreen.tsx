import { FontAwesome } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"
import { RootStackParamList } from "../../type"
import ButtonDetail from "../components/ButtonDetail"
import InputRetro from "../components/InputRetro"
import SafeLayout from "../components/SafeLayout"

type Props = NativeStackScreenProps<RootStackParamList, "CardMember">
const CardMemberScreen: React.FC<Props> = ({ route, navigation }) => {
  const shareButton = (type: string) => {
    // todo
  }
  return (
    <SafeLayout
      leftComponent={"Member"}
      goBack={() => navigation.goBack()}
      className="flex flex-col px-5 justify-start items-center"
    >
      <View className="flex flex-col w-full">
        <Text className="text-xl font-semibold my-5">Share With Friends</Text>
        <ButtonDetail
          icon={<FontAwesome name="twitter" size={14} />}
          bg="bg-white"
          name="Twitter"
          onPress={() => shareButton("twitter")}
        />
        <ButtonDetail
          icon={<FontAwesome name="whatsapp" size={14} />}
          bg="bg-white"
          name="Whatsapp"
          onPress={() => shareButton("whatsapp")}
        />
        <ButtonDetail
          icon={<FontAwesome name="facebook" size={14} />}
          bg="bg-white"
          name="Facebook"
          onPress={() => shareButton("facebook")}
        />
      </View>
      <View className="flex-1 flex-col w-full space-y-3 ">
        <View className="flex flex-col space-y-2">
          <Text className="font-semibold text-xl">Friends</Text>
          <Text>You can share by choosing friends name !</Text>
        </View>
        <View className="px-3">
          <InputRetro placeholder="Search by names" name="Search" />
        </View>
      </View>
    </SafeLayout>
  )
}
export default CardMemberScreen
