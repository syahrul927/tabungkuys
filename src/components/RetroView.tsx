import React from "react"
import { View, ViewProps } from "react-native"

interface RetroViewProps extends ViewProps {
  bg: string
}
const RetroView: React.FC<RetroViewProps> = props => {
  const { children, bg, ...newProps } = props
  return (
    <View className="m-2">
      <View
        {...newProps}
        className={`${bg} border border-black border-l-4 border-b-4 shadow`}
      >
        {children}
      </View>
    </View>
  )
}
export default RetroView
