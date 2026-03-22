import loansHeroImg from '@assets/loans-hero.png'
import Button from '@/components/ui/Button'
export default function HeroSection({loanFocus, calcFocus}) {
    return (
        <div className='shadow-md'>
            <img 
                src={loansHeroImg} 
                alt="Image of cash handing over to a customer" 
                className='md:h-[70vh] md:w-full'/>
            <div 
                className='
                    bg-accent-700 text-white text-2xl lg:text-4xl text-center 
                    py-5 px-2 flex flex-col gap-4 items-center'>
                <p>Premium loan rates you simply cannot resist</p>
                    <div className='flex gap-2'>
                        <Button size='lg' onClick={calcFocus}>Calculate</Button>
                        <Button size='lg' onClick={loanFocus}>Apply Now</Button>
                    </div>
            </div>
        </div>
    )
}