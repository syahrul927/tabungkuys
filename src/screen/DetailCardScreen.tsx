import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackParamList } from "../../type"
import SafeLayout from "../components/SafeLayout"

type Props = NativeStackScreenProps<RootStackParamList, "DetailCard">
const DetailCardScreen: React.FC<Props> = ({ route, navigation }) => {
  const { card } = route.params
  return (
    <SafeLayout
      leftComponent={"Detail Card"}
      goBack={() => navigation.goBack()}
    >
      <View className="relative">
        <TouchableOpacity className="absolute">
          <View className="w-20 h-20 bg-ret-brown">
            <Text>Example</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeLayout>
  )
}
export default DetailCardScreen
