import React from "react"
import { View, ViewProps } from "react-native"

interface RetroViewProps extends ViewProps {
  bg: string
  margin?: boolean
}
const RetroView: React.FC<RetroViewProps> = props => {
  const { children, bg, margin, ...newProps } = props
  return (
    <View className={margin ? "m-2" : "m-0"}>
      <View {...newProps} className={`${bg} shadow-sm`}>
        {children}
      </View>
    </View>
  )
}
export default RetroView
