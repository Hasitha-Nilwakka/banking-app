import heroImage from '@assets/heroimage.jpg'
import Button from '@/components/ui/Button'

export default function HeroSection({focusClick}) {
    return (
        <div className='flex justify-center'>
            <div className='
                hidden md:flex
                md:h-[80vh] md:w-[65vw]'>
                <img src={heroImage} alt="image of the premium bank building in black and white"/>
            </div>
            <div className='
                flex flex-col items-center py-7 bg-gray-50 w-full
                md:py-17 md:w-[35vw] md:h-[80vh] md:gap-5
                '>
                <p className='
                     text-primary-700 italic font-serif
                     text-3xl md:text-5xl'
                >Trusted</p>
                <p className='
                    text-3xl md:text-5xl 
                    text-accent-700 italic font-serif'
                >Since 1975</p>
                <div className='
                    text-4xl md:text-5xl 
                    text-secondary-700 font-thin italic'>
                    <h1 className='flex flex-col items-center gap-2'>
                        <span>Premium banking</span>
                        <span>solutions</span>
                        <span>designed to</span>
                        <span>grow with you</span>
                    </h1>
                </div>
    
                <div className='flex flex-col gap-3 mt-5'>
                    <Button variant = 'primary' size = 'lg'>Open Account</Button>
                    <Button variant = 'secondary' size = 'lg' onClick={focusClick} >Learn More</Button>       
                </div>
            </div>
        </div>
    )
}