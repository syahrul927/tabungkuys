export type RootStackParamList = {
  Home: undefined
  Card?: CardScreenProps[]
  DetailCard: DetailCardScreenProps
}
export interface CardScreenProps {
  id: string
  name: string
}
export interface DetailCardScreenProps {
  card: string
}
