import React, { useCallback, useMemo, useState } from "react"

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
    
    const inputFieldStyle : string = 'border px-2 text-primary border-primary rounded-lg bg-nutral'
    return (
        <div>
            <div className="
                bg-nutral text-center py-8 px-4 text-primary shadow-2xs
                md:flex
                md:items-center
                md:py-10
                md:px-40">
                <div>
                    <h2 className="mb-3 font-semibold text-2xl md:text-4xl md:font-bold">Flexibility starts here</h2>
                    <p className="text-lg md:text-2xl">Try our loan calculator to find out your monthly installement. You can borrow as little as €1000 and up to millions depending on your need.</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="
                    grid grid-cols-2 px-5 gap-y-0.5
                    text-primary mt-5 mb-5 text-lg
                    
                    md:text-xl md:px-5 md:w-[50%]">
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <input className={inputFieldStyle} type="number" id="loanAmount" value={inputValue.loanAmount} onChange={(e) => handleInputChange(e)}/>
                    <label htmlFor="intRate">Interest Rate</label>
                    <input className={inputFieldStyle} type="number" id="intRate" value={inputValue.intRate} onChange={(e) => handleInputChange(e)}/>
                    <label htmlFor="termMonths">Term (Months)</label>
                    <input className={inputFieldStyle} type="number" id="termMonths" value={inputValue.termMonths} onChange={(e) => handleInputChange(e)} min={6} max={120}/>
                </div>
                <div className="
                        text-lg bg-gray-200 flex flex-col items-center py-5 max-w-[70%] mx-auto gap-2 shadow-xs
                        md:text-xl md:w-[50%] md:items-stretch">
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:px-5">
                        <label className="font-semibold">Monthly installment</label>
                        <p>{`€ ${monthlyPayment}`}</p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:px-5">
                        <label className="font-semibold">Total repayment amount</label>
                        <p>{`€ ${totalPaid}`}</p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:px-5">
                        <label className="font-semibold">Total interest paid</label>
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
    