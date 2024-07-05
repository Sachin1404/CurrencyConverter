import { useState } from 'react'
import {Input} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [result,setResult]=useState(0)
  const data=useCurrencyinfo(from)
  const options=Object.keys(data)
  function converter(){
    setResult(data[to]*amount)
  }
  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(result)
    setResult(amount)
  }
  return (
    <>
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           converter()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                onAmountchange={(amount)=>setAmount(amount)}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencychange={(currency)=>setFrom(currency)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={result}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencychange={(currency)=>setTo(currency)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
