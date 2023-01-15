import React from "react"
import { View, ViewProps } from "react-native"

interface RetroViewProps extends ViewProps {
  bg: string
}
const RetroView: React.FC<RetroViewProps> = props => {
  const { children, className, bg, ...newProps } = props
  return (
    <View className="m-2">
      <View
        {...newProps}
        className={`absolute w-full bg-black -translate-x-1 translate-y-1 `}
      >
        {children}
      </View>
      <View {...newProps} className={`${bg} border border-black`}>
        {children}
      </View>
    </View>
  )
}
export default RetroView
