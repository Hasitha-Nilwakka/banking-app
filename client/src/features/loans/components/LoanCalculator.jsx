import { useMemo } from "react";
import { useState, forwardRef } from "react"

const loanRate = 10

function calculateLoanInstallement(amount, months) {
        const monthlyRate = loanRate / 12 / 100
        const emi = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        return emi
}

const LoanCalculator = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState({loanAmount : 0, loanPeriod : 6})
    const installment = useMemo(() => calculateLoanInstallement(inputValue.loanAmount, inputValue.loanPeriod), [inputValue.loanAmount, inputValue.loanPeriod])
    function updateInput(e) {
        const target = e.target.id
        const value = e.target.value
        setInputValue(prevValue => ({...prevValue, [target] : value}))
    }
    return (
        <div 
            className="flex flex-col items-center py-5" 
            ref={ref} 
            tabIndex={-1}
        >
            <p className="text-lg font-bold text-primary-700">Loan Calculator</p>
            <div className="grid gap-2 grid-cols-2 grid-rows-4 py-4 px-4 text-lg text-primary-700">
                <label htmlFor="loanAmount">Loan Amount</label>
                <input 
                    type="number" 
                    id="loanAmount"
                    value={inputValue?.loanAmount} 
                    onChange={(e) => updateInput(e)}
                    className="border shadow-2xs rounded-md px-1"/>
                <label>Interest</label>
                <label className="px-1">{`${loanRate}%`}</label>
                <label htmlFor="loan-period">Loan Period Months</label>
                <select 
                    value={inputValue.loanPeriod}
                    onChange={(e) => updateInput(e)}
                    id="loanPeriod" 
                    className="border shadow-2xs rounded-md px-1">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="60">60</option>
                    <option value="72">72</option>
                </select>
                <label className="font-semibold">Loan installement</label>
                <p className="font-semibold px-1 text-success-700">{installment.toFixed(2)}</p>
            </div>
        </div>
    )
})

LoanCalculator.displayName = 'LoanCalculator'

export default LoanCalculator
