import Calculator from "./Calculator"
import LoanForm from "./LoanForm"
import LoanDetailCard from "./LoanDetailCard.tsx"
import heroDesktop from '../../assets/Loan-hero-desktop.png'
import heroTab from '../../assets/Loan-hero-tab.png'
import heroMobile from '../../assets/Loan-hero-mobile.png'

function LoansPage() {
    return (
        <div>
            <div className="relative w-full overflow-hidden">
                <picture className="w-full" aria-label="hero image of the loans page contains images of two money bags, check, cash bundles, house and a car">
                    <source media="(min-width: 1024px)" srcSet={heroDesktop} />
                    <source media="(min-width: 768px)" srcSet={heroTab} />
                    <img src={heroMobile} alt="" />
                </picture>
                <div className="
                    absolute 
                    text-nutral 
                    bottom-0 
                    p-5 bg-black/60
                    flex flex-col items-start gap-3
                    
                    md:top-0
                    md:w-[45%]
                    md:px-8
                    md:py-10
                    md:gap-5
                    
                    lg:w-[50%]
                    lg:top-0
                    lg:gap-5
                    lg:py-10
                    
                    xl:gap-10
                    xl:pt-20

                    2xl:pt-15
                    ">
                    <h1 className="text-4xl font-semibold lg:text-5xl">Loans Tailored to Your Ambitions</h1>
                    <p className="text-xl lg:text-4xl">From personal goals to major investments, Premium Bank offers smart, flexible lending solutions built around you.</p>
                    <button 
                        className='bg-secondary 
                                    py-2 px-5 mt-2 rounded-lg
                                    font-bold text-xl 
                                    lg:text-2xl lg:mt-5 lg:py-4 lg:px-8'
                        >Apply Now</button>
                </div>
            </div>
            <Calculator />
            <LoanDetailCard />
            <LoanForm />
            
        </div>
    )
}

export default LoansPage