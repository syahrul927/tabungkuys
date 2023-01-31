export const moneyFormatter = (str: number | string): string => {
  const money = typeof str === "string" ? parseFloat(str) : str
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(money)
}
export const getInitials = (name: string) => {
  const names = name.split(" ")
  let str = names[0].substring(0, 1).toUpperCase()
  if (names.length > 1) {
    str += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return str
}
