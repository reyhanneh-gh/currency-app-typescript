
import { useState } from "react"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"

import { type myCurrency } from './myTypes'

function App() {
  const [currency, setCurrency] = useState<myCurrency>("$")
  const [rate, setRate] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [result, setResult] = useState<number | string>("")

  // --------------currency change button--------------

  function currencyChange(): void {
    setResult("")
    if (currency === "$") {
      setCurrency("ریال")
    } else {
      setCurrency("$")
    }
  }
  // ---------------------calculation---------------------
  function calculate(): void {
    const rateNum = Number(rate)
    const amountNum = Number(amount)

    setResult("")
    if (rateNum <= 0 || rate === "") {
      setResult("Invalid rate")
      return
    }
    if (amount === "") {
      setResult("Invalid amount")
      return
    }
    if (currency === "$") {
      setResult(amountNum * rateNum * 10000)
    } else {
      setResult(amountNum / rateNum)
    }
    console.log("test");

  }

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center content-between bg-gray-800">
      <Header />

      <Layout
        currency={currency}
        currencyChange={currencyChange}
        rate={rate}
        setRate={setRate}
        amount={amount}
        setAmount={setAmount}
        setResult={setResult}
        calculate={calculate}
        result={result}
      />

      <Footer />
    </div>
  )
}
export default App