import currentLoanProducts from "./loanProducts"
import type { loanProduct } from "./loanProducts"

export default function LoanDetailCard() {
    return (
        <div>
            {currentLoanProducts.map((loan : loanProduct, index : number) => {
                return <div key={index} className="border mt-5 px-5 py-3 flex flex-col items-center w-[90%] mx-auto text-lg gap-2 bg-nutral text-primary rounded-xl">
                            <div className="border-b w-full">
                                <h3 className="text-2xl font-bold">{`${loan.heading}`}</h3>
                            </div>
                            <div className="border-b w-full">
                                <p className="text-center italic">{loan.content}</p>
                            </div>
                            
                            <p className="text-left font-semibold">{`Rates from ${loan.minRate} APR`}</p>
                            <ul>
                                <li>{`Term: ${loan.term}`}</li>
                                <li>{`Amount: ${loan.amount}`}</li>
                                <li>{`Minimum income: ${loan.minimumIncome}`}</li>
                                <li>{`Minimum age: ${loan.minimumAge}`}</li>
                                <li>{`Type: ${loan.type}`}</li>
                            </ul>
                            <p className="text-sm italic mt-2">*Final terms depend on credit assessment and local regulations.</p>
                        </div>
            })}
        </div>
    )
}