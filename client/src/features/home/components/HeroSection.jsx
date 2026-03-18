import heroImagemdlg from '@assets/heroimagemdlg.png'
import heroImage from '@assets/heroimage.jpg'

export default function HeroSection() {
    return (
        <div className='flex'>
            <div className='hidden md:flex h-[80vh] w-[65vw] mt-1'>
            <img src={heroImage} alt="" className=''/>
            </div>
            <div className='py-11 flex flex-col items-center w-[35vw] gap-5'>
                <h1 className='text-7xl text-primary-700 font-bold'>PREMIUM</h1>
                <h1 className='text-7xl text-primary-700 font-bold'>Services</h1>
                <h2 className='text-6xl text-secondary-700 font-thin'>for</h2>
                <h2 className='text-7xl text-accent-700 font-extrabold'> everyone</h2>
            </div>
        </div>
    )
}