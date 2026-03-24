import { forwardRef } from "react";
import AccountCard from "./AccountCard";
import accountsWebPage from "@/constants/accountDescriptions";

const AccountsSection = forwardRef((props, ref) => {
    return (
        <div 
            className="
                flex flex-col items-center mt-5 mb-5 gap-8
                md:mt-10 md:mb-10
                lg:grid lg:grid-cols-3" 
            ref={ref} 
            tabIndex={-1}
        >
            {accountsWebPage.map((account,i) => {
                return <AccountCard
                        key={i}
                        name={account.name}
                        img={account.image}
                        alt={account.alt}
                        text={account.shortDescription}
                        varName={account.varName}
                        features={account.featureList}
                        />
            })}
        </div>
    )
})

AccountsSection.displayName = 'AccountsSection'

export default AccountsSection