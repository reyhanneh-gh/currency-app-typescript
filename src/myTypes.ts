export type myCurrency = "$" | "ریال"
export type myProps = {
    currency: myCurrency
    currencyChange: () => void
    rate: string
    setRate: React.Dispatch<React.SetStateAction<string>>
    amount: string
    setAmount: React.Dispatch<React.SetStateAction<string>>
    setResult: React.Dispatch<React.SetStateAction<string | number>>
    calculate: () => void
    result: number | string
}