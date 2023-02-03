import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import React, { useCallback, useMemo, useState } from "react"
import { Text, View } from "react-native"
import MoneyFormat from "./MoneyFormat"
import NumericKeyboard from "./NumericKeyboard"

interface TransactionBottomSheetSimpleProps {
  type: string
  innerRef: React.RefObject<BottomSheetModalMethods>
}
const TransactionBottomSheetSimple: React.FC<
  TransactionBottomSheetSimpleProps
> = props => {
  const [amount, setAmount] = useState<string>("0")
  const handleAmountPlus = (str: string) => {
    const total = amount + str
    setAmount(total)
  }
  const handleAmountMinus = () => {
    setAmount(amount.substring(0, amount.length - 2))
  }
  const { type, innerRef } = props

  // variables
  const snapPoints = useMemo(() => ["70%", "80%"], [])

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index < 1 && innerRef) {
        innerRef.current?.close()
      }
    },
    [innerRef]
  )
  const renderBackdrop = useCallback(
    (drop: any) => (
      <BottomSheetBackdrop {...drop} disappearsOnIndex={0} appearsOnIndex={1} />
    ),
    []
  )
  const getColorType = (tp: string) => {
    if (tp.toLowerCase() === "income") {
      return "bg-ret-green"
    }
    return "bg-ret-blossom"
  }
  return (
    <BottomSheetModal
      ref={innerRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enableDismissOnClose
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      <View className="flex flex-col w-full items-center px-6 h-full">
        <View>
          <Text className="text-lg">{type}</Text>
        </View>
        <View className="my-10">
          <MoneyFormat
            amount={amount}
            sizeMon={"text-6xl"}
            sizeRp={"text-2xl"}
          />
        </View>
        <NumericKeyboard
          onSubmit={() => console.log("submit")}
          onChange={handleAmountPlus}
          onDelete={handleAmountMinus}
        />
      </View>
    </BottomSheetModal>
  )
}
export default TransactionBottomSheetSimple
