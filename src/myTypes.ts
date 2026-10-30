export type myCurrency = "$" | "ريال"

export type myProps = {
    currency: myCurrency
    currencyChange: () => void
    rate: number
    setRate: React.Dispatch<React.SetStateAction<string>>
    amount: number
    setAmount: React.Dispatch<React.SetStateAction<string>>
    setResult: React.Dispatch<React.SetStateAction<string | number>>
    calculate: () => void
    result: number | string
}