import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useEffect, useMemo, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { RootStackParamList } from "../../type"
import AccountSearchItem, {
  AccountSearchItemProps,
} from "../components/AccountSearchItem"
import ButtonDetail from "../components/ButtonDetail"
import InputRetro from "../components/InputRetro"
import SafeLayout from "../components/SafeLayout"
import { useDebounce } from "../utils/Hooks"

let list: AccountSearchItemProps[] = [
  {
    name: "Renaldi Dwi Iwan",
    id: "rey123good",
    onPress: (str: string) => {
      console.log(str)
    },
  },
  {
    name: "Nauval Purnomo Sidi",
    id: "nauval001",
    onPress: (str: string) => {
      console.log(str)
    },
  },
  {
    name: "Tegar Machfudzi",
    id: "egarfudzi",
    onPress: (str: string) => {
      console.log(str)
    },
  },
  {
    name: "Syahrul Ataufik",
    id: "syahrul927",
    onPress: (str: string) => {
      console.log(str)
    },
  },
  {
    name: "Ulfa Dwi Nurul Octa",
    id: "ulfadwi001",
    onPress: (str: string) => {
      console.log(str)
    },
  },
]
type Props = NativeStackScreenProps<RootStackParamList, "CardMember">
const CardMemberScreen: React.FC<Props> = ({ navigation }) => {
  const [input, setInput] = useState<string>("")
  const searchKey = useDebounce(input, 333)
  const [loading, setLoading] = useState(false)
  const [members, setMembers] = useState<AccountSearchItemProps[]>(list)

  const shareButton = (type: string) => {
    // todo
  }

  const handleInvite = (id: string) => {
    const newMembers = members.map(item => {
      if (item.id === id) {
        return { ...item, invited: true }
      }
      return item
    })
    setMembers(newMembers)
    list = [...newMembers]
  }

  const listMemberSorted = useMemo(() => {
    return [...members].sort((a, b) => {
      if (a.invited === b.invited) return 0
      return a.invited ? 1 : -1
    })
  }, [members])
  const renderListMember = (member: AccountSearchItemProps[]) => {
    return member.map(item => (
      <AccountSearchItem
        name={item.name}
        id={item.id}
        key={item.id}
        invited={item.invited}
        onPress={handleInvite}
      />
    ))
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    const newMembers = list.filter(item =>
      item.name.toLowerCase().includes(searchKey.toLowerCase())
    )
    setMembers(newMembers)
  }, [searchKey])
  return (
    <SafeLayout
      leftComponent={"Member"}
      goBack={() => navigation.goBack()}
      className="flex flex-col px-5 justify-start items-center"
    >
      <View className="flex flex-col w-full">
        <Text className="text-xl font-semibold my-5">Share With Friends</Text>
        <ButtonDetail
          icon={<FontAwesome name="twitter" size={14} />}
          bg="bg-white"
          name="Twitter"
          onPress={() => shareButton("twitter")}
        />
        <ButtonDetail
          icon={<FontAwesome name="whatsapp" size={14} />}
          bg="bg-white"
          name="Whatsapp"
          onPress={() => shareButton("whatsapp")}
        />
        <ButtonDetail
          icon={<FontAwesome name="facebook" size={14} />}
          bg="bg-white"
          name="Facebook"
          onPress={() => shareButton("facebook")}
        />
      </View>
      <View className="flex-1 flex-col w-full space-y-3 ">
        <View className="flex flex-col space-y-2">
          <Text className="font-semibold text-xl">Friends</Text>
          <Text>You can share by choosing friends name !</Text>
        </View>
        <View className="flex flex-col space-y-3">
          <InputRetro
            placeholder="Search by names"
            name="Search"
            onChangeText={e => setInput(e)}
          />
          {loading && (
            <View className="absolute flex flex-row space-x-3 justify-center items-center bg-white/90 w-full h-full z-10">
              <Text className="text-black text-xl">
                <AntDesign
                  className="animate-spin "
                  name="loading1"
                  size={18}
                />{" "}
                Processing...
              </Text>
            </View>
          )}
          {searchKey ? (
            <ScrollView className="flex flex-col w-full">
              {renderListMember(listMemberSorted)}
            </ScrollView>
          ) : (
            <Text className="text-gray-500">Find Your Friends !</Text>
          )}
        </View>
      </View>
    </SafeLayout>
  )
}
export default CardMemberScreen
