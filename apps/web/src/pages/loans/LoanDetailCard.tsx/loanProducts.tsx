export interface loanProduct {
    name : 'Personal' | 'Home' | 'Car' | 'Education'
    amount : string
    minimumIncome : string
    minimumAge : string
    type : string
    minRate : number
    term : string
    heading : string
    content : string
}


export const currentLoanProducts : loanProduct[] = [
    {name : 'Personal', amount : '€1,000 - €50,000', minimumIncome : '€1,500/month', minimumAge : '18 years', type : 'Unsecured', minRate : 6.5, term : '1 - 7 Years', heading : 'Flexible Personal Loans', content : 'Finance your plans with simple terms designed for everyday needs and unexpected expenses.'},
    {name : 'Home', amount : '€50,000 - €1,000,000+', minimumIncome : '€2,500/month', minimumAge : '21 years', type : 'Secured (property)', minRate : 3.2, term : '1 - 30 years', heading : 'Home Financing Solutions', content : 'Secure your future with stable mortgage options and predictable long-term repayment plans.'},
    {name : 'Car',amount : '€5,000 - €250,000', minimumIncome : '€1,800/month', minimumAge : '18 years', type : 'Secured (vehicle)', minRate : 4.5, term : '1 - 7 years', heading : 'Vehicle Financing Made Easy', content : 'Drive forward with affordable loans and flexible repayment plans for new or used vehicles.'},
    {name : 'Education',amount : '€2,000 - €100,000', minimumIncome : 'Not required / co-signer', minimumAge : '18 years', type : 'Type: Unsecured / Co-signed', minRate : 4.8, term : '2 - 15 years', heading : 'Support for Your Education', content : 'Invest in your future with flexible student loans and manageable repayment options.'}
]

export default currentLoanProducts