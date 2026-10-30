import type { myProps } from "../myTypes"

function Layout({ currency, currencyChange, rate, setRate, amount, setAmount, result, setResult, calculate }: myProps) {
    return (
        <section className="w-11/12 md:w-3/4 lg:w-2/3 h-fit flex flex-wrap justify-center items-center formBg rounded-[10px] py-10 px-2.5 my-5">
            {/* --------------------1 dollar rate input------------ */}
            <lable className="w-full h-fit text-[18px] md:text-[20px] text-center text-white font-bold">Exchange Rate</lable>
            <p className="w-full h-fit text-[16px] md:text-[18px] text-center text-blue-400">
                1 USD = ? Rials
            </p>
            <div className="w-fit h-11 flex justify-between items-center mt-5 mb-10 bg-gray-300 rounded-[10px]">
                <input type="number" placeholder="example: 270" className="w-30 h-fit py-2.5 text-center text-black placeholder:text-gray-500 bg-none"
                    onChange={(e) => {
                        setRate(e.target.value)
                        setResult("")
                    }}
                    value={rate} />
                <p className="w-fit h-fit text-blue-500 px-2.5 text-center">0000 Rials</p>
            </div>
            <p className="w-full h-fit text-[16px] pt-5 md:text-[18px] text-center text-white border-t border-t-gray-500">
                Now choose a direction and enter an amount.
            </p>
            <p className="w-full h-fit text-[16px] md:text-[18px] text-center text-blue-400 mb-5">
                Enter the rials amount without 0000!
            </p>

            {/* --------------------amount input------------------- */}

            <div className="w-full h-fit flex flex-wrap lg:flex-nowrap justify-center items-center relative mb-5">
                <div className="w-fit h-fit overflow-hidden bg-gray-300 rounded-[10px] flex justify-between items-center py-0.5 px-2.5">
                    <div className="size-10 flex justify-center items-center bg-blue-900 rounded-full">
                        <p className="text-white font-bold text-[15px] text-center">
                            {currency === "$" ? "$" : "ريال"}
                        </p>
                    </div>
                    <input type="number" placeholder="enter the amount" className="w-40 h-fit p-2.5 bg-none text-center text-black placeholder:text-gray-500 placeholder:text-center"
                        onChange={(e) => {
                            setAmount(e.target.value)
                            setResult("")
                        }}
                        value={amount}
                    />
                </div>

                <div className="w-full lg:w-fit h-fit flex justify-center items-center">
                    <span onClick={currencyChange} className="rotate-90 lg:rotate-0 material-symbols-outlined mx-5 p-5 rounded-full bg-blue-500 text-white text-center text-[20px] border border-gray-700 hover:scale-[.9] hover:bg-blue-400 duration-300 cursor-pointer">sync_alt</span>
                </div>

                <div className="w-fit h-fit overflow-hidden bg-blue-300 rounded-[10px] flex justify-between items-center py-0.5 px-2.5">
                    <div className="size-10 flex justify-center items-center bg-blue-900 rounded-full">
                        <p className="text-white font-bold text-[15px] text-center">
                            {currency === "$" ? "ريال" : "$"}
                        </p>
                    </div>
                    <div className="w-40 h-11 p-2.5 text-center text-black">
                        {result}
                    </div>
                </div>

            </div>

            {/* --------------------calc button------------------- */}

            <div className="w-full h-fit flex justify-center mt-5">
                <button onClick={calculate} className="calcBtn py-2.5 px-5 bg-blue-500 rounded-full text-center text-[20px] text-white border border-gray-700 hover:scale-[.9] hover:bg-blue-400 duration-300 cursor-pointer">Calculate</button>
            </div>
        </section>
    )
}
export default Layout