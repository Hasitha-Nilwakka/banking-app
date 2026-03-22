import LoanCalculator from "@/features/loans/components/LoanCalculator"
import LoanApplicationForm from "@/features/loans/components/LoanApplicationForm"
import HeroSection from "@/features/loans/components/HeroSection"
import { useRef } from "react"

export default function LoansPage() {
    const loanAppRef = useRef(null)
    const calcFocus = useRef(null)

    function focusLoanApplication() {
        loanAppRef.current?.scrollIntoView({behavior : "smooth", block : 'start'})
        loanAppRef.current?.focus()
    }

    function focusLoanCalculator() {
        calcFocus.current?.scrollIntoView({behavior : "smooth", block : 'start'})
        calcFocus.current?.focus()
    }
    return (
        <div>
            <HeroSection loanFocus={focusLoanApplication} calcFocus={focusLoanCalculator}/>
            <LoanCalculator ref={calcFocus}/>
            <LoanApplicationForm ref={loanAppRef}/>
        </div>
    )
}