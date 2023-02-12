export type RootStackParamList = {
  Home: undefined
  Card: CardScreenProps
  DetailCard: DetailCardScreenProps
  CardMember: CardMemberScreenProps
}
export interface CardMemberScreenProps {
  member?: MemberAccount[]
}

export interface MemberAccount {
  id: string
  name: string
}

export interface CardScreenProps {
  actionType: "Update" | "New"
  id?: string
  name?: string
}
export interface DetailCardScreenProps {
  card: string
}
