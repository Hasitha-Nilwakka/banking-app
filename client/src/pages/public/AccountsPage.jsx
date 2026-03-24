import HeroSection from "@/features/accounts/components/HeroSection"
import AccountsSection from "@/features/accounts/components/AcountsSection"
import AccountOpenForm from "@/features/accounts/components/AccountOpenForm"
import { useRef, createContext } from "react"
import { useState } from "react"

const AccContext = createContext(null)

export default function AccountsPage() {
    const [selectedAcc, setSelectedAcc] = useState('')

    function selectAccount(newVal) {
        setSelectedAcc(newVal)
    } 

    const featureRef = useRef(null)
    const accountRef = useRef(null)
    
    function focusfeatureRef() {
        featureRef.current?.scrollIntoView({behavior : "smooth", block : 'start'})
        featureRef.current?.focus()
    }

    function focusAccRef() {
        accountRef.current?.scrollIntoView({behavior : "smooth", block : 'start'})
        accountRef.current?.focus()
    }
    return (
        <div>
            <HeroSection featureFocus={focusfeatureRef} accFocus={focusAccRef}/>
            <AccContext.Provider value={{selectedAcc, selectAccount, focusAccRef}}>
                <AccountsSection ref={featureRef}/>
                <AccountOpenForm ref={accountRef}/>
            </AccContext.Provider>
        </div>
    )
}

export {AccContext}