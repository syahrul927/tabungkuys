export type RootStackParamList = {
  Home: undefined
  Card?: CardScreenProps[]
  DetailCard: DetailCardScreenProps
  CardMemberScreen: CardMemberScreenProps
}
export interface CardMemberScreenProps {
  member: MemberAccount[]
  actionMember: () => void
}

export interface MemberAccount {
  id: string
  name: string
}

export interface CardScreenProps {
  id: string
  name: string
}
export interface DetailCardScreenProps {
  card: string
}
