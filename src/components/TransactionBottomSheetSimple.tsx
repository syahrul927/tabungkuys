import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet"
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Text, View } from "react-native"
import MoneyFormat from "./MoneyFormat"
import NumericKeyboard from "./NumericKeyboard"

interface TransactionBottomSheetSimpleProps {
  type: string
}
const TransactionBottomSheetSimple = forwardRef<
  BottomSheetModal,
  TransactionBottomSheetSimpleProps
>((props, ref) => {
  const [amount, setAmount] = useState<string>("0")
  const { type } = props

  // variables
  const snapPoints = useMemo(() => ["70%", "80%"], [])

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index < 1 && ref && typeof ref !== "function") {
        ref.current?.close()
      }
    },
    [ref]
  )
  const renderBackdrop = useCallback(
    (drop: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...drop} disappearsOnIndex={0} appearsOnIndex={1} />
    ),
    []
  )
  useEffect(() => {
    console.log(`Type : ${type}`)
  }, [type, ref])
  return (
    <BottomSheetModal
      ref={ref}
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
          onChange={setAmount}
        />
      </View>
    </BottomSheetModal>
  )
})
export default TransactionBottomSheetSimple
