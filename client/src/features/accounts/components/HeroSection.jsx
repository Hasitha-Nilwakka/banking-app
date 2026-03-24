import acountsHeroImage from '@assets/accounts-hero.jpg'
import Button from '@/components/ui/Button'

export default function HeroSection({featureFocus, accFocus}) {
    return (
        <div className='shadow-sm md:flex'>
                    <div>
                        <img 
                        src={acountsHeroImage} 
                        alt="Image of five debit or credit cards in a denim pocket" 
                        className='md:h-[50vh] md:w-[60vw] lg:h-[60vh] lg:w-[57vw]'/>
                    </div>
                    <div 
                        className='
                            text-primary-700 text-2xl text-center 
                            py-5 px-8 flex flex-col gap-4 items-center
                            lg:text-4xl lg:w-[43vw] lg:gap-10 lg:py-12
                            md:w-[40vw]
                    '>
                        <h1>Accounts for all your needs</h1>
                        <p 
                            className='text-lg text-secondary-700 lg:text-2xl'
                        >We offer accounts matching all your needs. Savings, Current and Premium accounts offer a wide range of benefits. Our cutting edge technology ensures the safty of your money with us.</p>
                        <div className='flex gap-2'>
                            <Button variant='accent' size='lg' onClick={featureFocus}>Learn More</Button>
                            <Button size='lg' onClick={accFocus}>Open Account</Button>
                        </div>
                    </div>
        </div>
    )
}