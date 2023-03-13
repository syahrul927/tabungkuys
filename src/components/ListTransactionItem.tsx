import TransactionItem, { TransactionItemProps } from "./TransactionItem"

interface ListTransactionItemProps {
  list: TransactionItemProps[]
}
const ListTransactionItem: React.FC<ListTransactionItemProps> = props => {
  const { list } = props
  return (
    <>
      {list.map(item => {
        const id = (Math.random() + 1).toString(36).substring(7)
        return (
          <TransactionItem
            amount={item.amount}
            type={item.type}
            from={item.from}
            date={item.date}
            key={id}
          />
        )
      })}
    </>
  )
}
export default ListTransactionItem
