import React from "react"
import { View, ViewProps } from "react-native"

const SafeLayout: React.FC<ViewProps> = props => {
  const { children, className, ...newProps } = props
  return <View {...newProps}>{children}</View>
}
export default SafeLayout
