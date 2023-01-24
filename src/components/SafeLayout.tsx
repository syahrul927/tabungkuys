import React from "react"
import { View, ViewProps } from "react-native"

const SafeLayout: React.FC<ViewProps> = props => {
  const { children, className, ...newProps } = props
  return (
    <View {...newProps} className={`pt-16 ${className}`}>
      {children}
    </View>
  )
}
export default SafeLayout
