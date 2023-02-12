import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { MemberAccount } from "../../type"
import RetroView from "./RetroView"
import UserIcon from "./UserIcon"

export interface AccountSearchItemProps extends MemberAccount {
  invited?: boolean
  onPress: (id: string) => void
}
const AccountSearchItem: React.FC<AccountSearchItemProps> = props => {
  const { name, id, invited, onPress } = props
  const getStr = (alreadyInvited?: boolean) => {
    return alreadyInvited ? "Sent" : "Invite"
  }
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <RetroView
        bg="bg-white"
        margin
        className="flex flex-row rounded-lg p-3 w-full space-x-3"
      >
        <View>
          <UserIcon name={name} />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold">{name}</Text>
          <Text className="text-sm font-light text-gray-500">{`@${id}`}</Text>
        </View>
        <View className="justify-center">
          <View
            className={`${
              invited ? "bg-green-50" : "bg-blue-50"
            } px-3 py-2 rounded-lg`}
          >
            <Text
              className={`${
                invited ? "text-green-400" : "text-blue-400"
              } font-bold`}
            >
              {getStr(invited)}
            </Text>
          </View>
        </View>
      </RetroView>
    </TouchableOpacity>
  )
}
export default AccountSearchItem
