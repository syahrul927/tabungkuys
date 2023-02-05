import { FontAwesome } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "nativewind"
import { Children } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../type"
import CardMemberScreen from "./screen/CardMemberScreen"
import CardScreen from "./screen/CardScreen"
import DetailCardScreen from "./screen/DetailCardScreen"
import HomeScreen from "./screen/HomeScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()
const Navigation = () => {
  const { colorScheme } = useColorScheme()
  return (
    <NavigationContainer>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Card"
          options={{
            headerShown: false,
          }}
          component={CardScreen}
        />
        <Stack.Screen
          name="CardMember"
          options={{
            headerShown: false,
          }}
          component={CardMemberScreen}
        />
        <Stack.Screen
          name="DetailCard"
          options={{
            headerShown: false,
          }}
          component={DetailCardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
