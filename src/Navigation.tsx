import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "nativewind"
import { RootStackParamList } from "../type"
import CardScreen from "./screen/CardScreen"
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
