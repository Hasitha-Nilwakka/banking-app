import React, { useCallback, useMemo, useState } from "react"
import loanCalc from '../../assets/loanCalc.png'

interface CalculatorInput {
    loanAmount : number | string,
    intRate : number | string,
    termMonths : number | string
}

export default function Calculator() {
    const [inputValue, setInputValue] = useState<CalculatorInput>({loanAmount : 5000, intRate: 5, termMonths : 60})
    
    const handleInputChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.id
        const value = e.target.value
        setInputValue(v => ({...v, [target] : value}))
    }, [])

    const [monthlyPayment, totalPaid, totalIntPaid] = useMemo(() => calculateMonthlyPayment(Number(inputValue.loanAmount), Number(inputValue.intRate), Number(inputValue.termMonths)), [inputValue.loanAmount, inputValue.intRate, inputValue.termMonths])
    
    const inputFieldStyle : string = 'bg-white rounded-lg px-2'
    return (
        <div className="bg-nutral py-5 md:flex">
            <div className="md:flex md:flex-col md:items-center md:p-5 md:gap-3">
                <h2 className="text-3xl text-primary text-center font-semibold">Try Our Loan Calculator</h2>
                <img src={loanCalc} alt="and image of a person using a calculator" className="hidden md:block"/>
            </div>
            <div className="w-[75vw] flex flex-col justify-self-center p-5 text-primary mt-5 mb-5 bg-nutral shadow-lg rounded-lg md:w-[50vw] lg:w-[35vw]">
                <div className="grid grid-cols-2 text-lg gap-2 lg:text-xl lg:px-10">
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <input className={inputFieldStyle} type="number" id="loanAmount" value={inputValue.loanAmount} onChange={(e) => handleInputChange(e)}/>
                    <label htmlFor="intRate">Interest Rate</label>
                    <input className={inputFieldStyle} type="number" id="intRate" value={inputValue.intRate} onChange={(e) => handleInputChange(e)}/>
                    <label htmlFor="termMonths">Loan Term (Months)</label>
                    <input className={inputFieldStyle} type="number" id="termMonths" value={inputValue.termMonths} onChange={(e) => handleInputChange(e)} min={6} max={120}/>
                </div>
                <div className="flex justify-between mt-5 px-2 text-lg font-semibold lg:text-xl lg:px-17 lg:mt-10 lg:mb-10">
                    <div className="flex flex-col gap-2 italic">
                        <label>Monthly installment</label>
                        <label>Total repayment amount</label>
                        <label>Total interest paid</label>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                        <p>{`€ ${monthlyPayment}`}</p>
                        <p>{`€ ${totalPaid}`}</p>
                        <p>{`€ ${totalIntPaid}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function calculateMonthlyPayment(amount : number, rate : number, months : number) {
        const r = rate / 12 / 100

        const monthlyPayment : number = r === 0 ? amount / months : amount * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) -1)
        const totalRepayment : number = monthlyPayment * months
        const totalIntPaid : number = totalRepayment - amount
        return [monthlyPayment.toFixed(2), totalRepayment.toFixed(2), totalIntPaid.toFixed(2)] as const
}
    