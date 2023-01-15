import { Text, View } from "react-native"

interface HeaderHomeProps {
  name: string
}
const HeaderHome: React.FC<HeaderHomeProps> = props => {
  const { name } = props
  return (
    <View className="flex flex-row w-full h-28 justify-start items-center pl-5 pt-10 bg-white">
      <Text className="font-bold text-lg">{name}</Text>
    </View>
  )
}
export default HeaderHome
