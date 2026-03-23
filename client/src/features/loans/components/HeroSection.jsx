import loansHeroImg from '@assets/loans-hero.png'
import Button from '@/components/ui/Button'
export default function HeroSection({loanFocus, calcFocus}) {
    return (
        <div className='shadow-sm md:flex'>
            <div>
                <img 
                src={loansHeroImg} 
                alt="Image of cash handing over to a customer" 
                className='h-[40vh] md:h-[50vh] md:w-[60vw] lg:h-[60vh] lg:w-[70vw]'/>
            </div>
            <div 
                className='
                    text-primary-700 text-2xl text-center 
                    py-5 px-8 flex flex-col gap-4 items-center
                    lg:text-4xl lg:w-[30vw] lg:gap-10 lg:py-20
                    md:w-[40vw]
            '>
                <h1>Premium rates you simply cannot resist</h1>
                <p className='text-lg text-secondary-700 lg:text-2xl'>Premium bank now offers Personal, Auto, Housing, Business and Study Loans at the industry lowest rate of 4.5%</p>
                <div className='flex gap-2'>
                    <Button variant='accent' size='lg' onClick={calcFocus}>Calculate</Button>
                    <Button size='lg' onClick={loanFocus}>Apply Now</Button>
                </div>
            </div>
        </div>
    )
}