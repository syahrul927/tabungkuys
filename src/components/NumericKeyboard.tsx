import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { Text, TouchableHighlight, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ButtonRetro from "./ButtonRetro"

interface NumericKeyboardProps {
  onSubmit: () => void
  onChange: (str: string) => void
}
const NumericKeyboard: React.FC<NumericKeyboardProps> = ({
  onChange,
  onSubmit,
}) => {
  const [amount, setAmount] = useState<string>("0")
  const handleAmountPlus = (str: string) => {
    const total = amount + str
    setAmount(total)
  }
  const handleAmountMinus = () => {
    if (amount.length === 1) {
      setAmount("0")
      return
    }
    setAmount(amount.substring(0, amount.length - 1))
  }
  const onChangeCallback = useCallback(
    (str: string) => {
      onChange(str)
    },
    [onChange]
  )

  useEffect(() => {
    onChangeCallback(amount)
  }, [amount, onChangeCallback])
  useEffect(() => {
    setAmount("0")
  }, [])
  const renderButton = (str: string | ReactNode) => {
    const id = (Math.random() + 1).toString(36).substring(7)
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        key={id}
        onPress={
          typeof str === "string"
            ? () => handleAmountPlus(str)
            : () => handleAmountMinus()
        }
        className="rounded-lg py-5 flex-1 flex justify-center items-center shadow-ret-black shadow active:text-white"
      >
        <Text className="text-4xl">{str}</Text>
      </TouchableHighlight>
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
      <TouchableOpacity onPress={onSubmit}>
        <ButtonRetro
          bg="bg-ret-black"
          attr="py-3 flex justify-center items-center"
          textStyle="text-white font-semibold text-lg"
          title="Submit"
        />
      </TouchableOpacity>
    </View>
  )
}
export default NumericKeyboard
