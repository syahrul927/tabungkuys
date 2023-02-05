import { Text, View } from "react-native"
import { getInitials } from "../utils/StringUtils"

interface UserIconProps {
  name: string
}
const UserIcon: React.FC<UserIconProps> = props => {
  const { name } = props
  const str = getInitials(name)
  return (
    <View className="flex justify-center items-center rounded-full w-12 h-12 bg-ret-green">
      <Text className="text-md">{str}</Text>
    </View>
  )
}

export default UserIcon
