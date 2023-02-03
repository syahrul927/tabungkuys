import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"
import { RootStackParamList } from "../../type"

type Props = NativeStackScreenProps<RootStackParamList, "DetailCard">
const DetailCardScreen: React.FC<Props> = ({ route, navigation }) => {
  const { card } = route.params
  return (
    <View className="flex justify-center items-center w-full h-full">
      <Text onPress={() => navigation.goBack()}>{card}</Text>
    </View>
  )
}
export default DetailCardScreen
