export const moneyFormatter = (str: number | string): string => {
  const money = typeof str === "string" ? parseFloat(str) : str
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(money)
}
