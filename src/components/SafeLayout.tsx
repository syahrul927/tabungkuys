import { Entypo } from "@expo/vector-icons"
import React, { ReactNode } from "react"
import { Text, View, ViewProps } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

interface SafeLayoutProps extends ViewProps {
  leftComponent: string | ReactNode
  goBack?: () => void
  rightComponent?: ReactNode
}
const SafeLayout: React.FC<SafeLayoutProps> = props => {
  const {
    children,
    className,
    leftComponent,
    goBack,
    rightComponent,
    ...newProps
  } = props
  const renderLeftComponent = () => {
    if (typeof leftComponent === "string") {
      return (
        <View className="flex justify-center items-start w-full flex-1">
          <Text className="text-2xl font-bold">{leftComponent}</Text>
        </View>
      )
    }
    return leftComponent
  }
  return (
    <View
      {...newProps}
      className={`pt-16 bg-gray-50 dark:bg-ret-black w-full h-full ${className}`}
    >
      <View className="flex flex-row justify-between items-center w-full ">
        {goBack ? (
          <TouchableOpacity onPress={goBack} className="mr-3">
            <Entypo name="chevron-left" size={20} />
          </TouchableOpacity>
        ) : null}
        {renderLeftComponent()}
        {rightComponent || null}
      </View>
      {children}
    </View>
  )
}
export default SafeLayout
