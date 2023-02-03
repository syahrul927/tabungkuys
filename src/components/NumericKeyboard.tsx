import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { ReactNode } from "react"
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ButtonRetro from "./ButtonRetro"

interface NumericKeyboardProps {
  onSubmit: () => void
  onDelete: () => void
  onChange: (str: string) => void
}
const NumericKeyboard: React.FC<NumericKeyboardProps> = ({
  onChange,
  onSubmit,
  onDelete,
}) => {
  const renderButton = (str: string | ReactNode) => {
    return (
      <View className="rounded-lg  py-5 flex-1 flex justify-center items-center shadow-ret-black shadow">
        <TouchableOpacity
          onPress={
            typeof str === "string" ? () => onChange(str) : () => onDelete()
          }
        >
          <Text className="text-4xl">{str}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderKeyboard = (start: number) => {
    const num = []
    for (let j = start; j < start + 3; j += 1) {
      num.push(renderButton(`${j}`))
    }
    return num
  }
  const renderSubmit = () => {
    const arr = []
    arr.push(renderButton(" "))
    arr.push(renderButton("0"))
    arr.push(renderButton(<FontAwesome5 name="arrow-left" size={25} />))
    return arr
  }

  return (
    <View className="flex flex-col space-y-4">
      <View className="flex flex-row space-x-4 w-full justify-center">
        {renderKeyboard(1)}
      </View>
      <View className="flex flex-row space-x-4 w-full justify-center">
        {renderKeyboard(4)}
      </View>
      <View className="flex flex-row space-x-4 w-full justify-center">
        {renderKeyboard(7)}
      </View>
      <View className="flex flex-row space-x-4 w-full justify-center">
        {renderSubmit()}
      </View>
      <View>
        <ButtonRetro
          onPress={onSubmit}
          bg="bg-ret-black"
          attr="py-3 flex justify-center items-center"
          textStyle="text-white font-semibold text-lg"
          title="Submit"
        />
      </View>
    </View>
  )
}
export default NumericKeyboard
