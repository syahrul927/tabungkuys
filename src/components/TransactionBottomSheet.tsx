import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import React, { useCallback, useMemo } from "react"
import { Text, View, ViewProps } from "react-native"
import ButtonRetro from "./ButtonRetro"
import InputRetro from "./InputRetro"

interface TransactionBottomSheetProps {
  type: string
  innerRef: React.RefObject<BottomSheetModalMethods>
}
const TransactionBottomSheet: React.FC<TransactionBottomSheetProps> = props => {
  const { type, innerRef } = props

  // variables
  const snapPoints = useMemo(() => ["10%", "25%"], [])

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
      return "bg-green-300"
    }
    return "bg-red-300"
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
      <View className="flex flex-col w-full justify-between px-6 h-full">
        <View className="flex flex-row mb-5 w-fit">
          <ButtonRetro
            title={type}
            attr="capitalize "
            bg={getColorType(type)}
          />
        </View>
        <View>
          <InputRetro placeholder="Rp. 0" name="Amount" />
        </View>
        <View className=" mb-10">
          <ButtonRetro title="Submit" bg="bg-orange-300" attr="py-3" />
        </View>
      </View>
    </BottomSheetModal>
  )
}
export default TransactionBottomSheet
