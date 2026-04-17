import heroImageDesktop from '../../assets/hero-desktop.png'
import heroImageTab from '../../assets/hero-tab.png'
import heroImageMobile from '../../assets/hero-mobile.png'
import transferIcon from '../../assets/transactionicon.svg'
import savingIcon from '../../assets/savingsicon.svg'
import FeatureIcon from './FeatureIcon'
import securityIcon from '../../assets/securityicon.svg'
import secondaryHeroDesktop from '../../assets/secondary-hero-desktop.png'
import secondaryHeroMobile from '../../assets/secondary-hero-mobile.png'
import serviceImage from '../../assets/serviceimage.png'
import StatIcon from './StatIcon'
import { Link } from 'react-router-dom'

function HomePage() {
    const secondaryImageBtnStyle : string = 'bg-secondary py-2 px-5 font-bold text-xl mt-5 rounded-lg lg:text-2xl lg:mt-10 lg:py-4 lg:px-8'
    const actionLinkStyle : string = 'bg-nutral cursor-pointer text-primary py-2 px-10 text-lg hover:shadow-lg hover:text-xl transition lg:text-2xl lg:hover:text-2xl lg:hover:translate-y-2'
    return (
        <div>
            <div>
                <div className='relative w-full overflow-hidden'>
                    <picture aria-label='hero image of the website, contains a mobile phone with banking platform and two images of credit card'>
                        <source media="(min-width: 1024px)" srcSet={heroImageDesktop} />
                        <source media="(min-width: 768px)" srcSet={heroImageTab} />
                        <img src={heroImageMobile}/>
                    </picture>
                </div>
                <div 
                    className="
                        text-nutral
                        absolute
                        flex
                        flex-col

                        top-110
                        items-start
                        px-10
                        gap-2

                        md:top-40
                        md:w-[45%]
                        md:px-8
                        md:py-2

                        lg:top-50
                        lg:gap-5
                    ">
                    <p className='text-3xl lg:text-4xl'>Experince the Future of <span className='font-bold'>Banking</span></p>
                    <h1 className='text-5xl font-bold lg:text-8xl'>Smart, Safe & Convienient</h1>
                    <p className='text-2xl lg:text-4xl'>Premium banking services for everyone</p>
                    <button 
                        className='bg-secondary 
                                    py-2 px-5 mt-2 rounded-lg
                                    font-bold text-xl 
                                    lg:text-2xl lg:mt-5 lg:py-4 lg:px-8'
                        >Learn More</button>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-center md:gap-10'>
                <FeatureIcon img={transferIcon} alt={'money transfer image'} title={'Easy Transfers'}>Send money quickly with zero hassle. Move funds anytime with total ease.</FeatureIcon>
                <FeatureIcon img={savingIcon} alt={'piggy bank icon'} title={'Smart Savings'}>Grow your savings with confidence. Build wealth over time with smart tools.</FeatureIcon>
                <FeatureIcon img={securityIcon} alt={'security sheild icon'} title={'Security First'}>Protect your funds with advanced security. Stay safe online with trusted protection</FeatureIcon>
            </div>
            <div className='mt-7 relative w-full'>
                <picture>
                    <source media="(min-width: 768px)" srcSet={secondaryHeroDesktop} />
                    <img src={secondaryHeroMobile} alt="" />
                </picture>
                <div className='absolute text-nutral bottom-5 px-7 py-5 md:w-[50vw] lg:top-15'>
                    <h2 className='text-3xl font-semibold md:mb-5 lg:text-5xl'>Manage Your Money With Easy</h2>
                    <p className='text-xl font-thin md:font-semibold lg:text-2xl lg:font-bold'>Take full control of your finances with intuitive tools designed for everyday banking, savings, and investing</p>
                    <div className='flex gap-5'>
                        <button className={secondaryImageBtnStyle}>Open Account</button>
                        <button className={secondaryImageBtnStyle}>Apply for a loan</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 py-10 px-20 lg:flex-row lg:justify-center'>
                <StatIcon title={'1M+'}>Customers</StatIcon>
                <StatIcon title={'€5B+'}>Transactions</StatIcon>
                <StatIcon title={'99.9%'}>Uptime</StatIcon>
            </div>
            <div className='border-4 border-primary m-5 rounded-2xl p-5 shadow-2xs md:flex md:w-[80vw] justify-self-center'>
                <div>
                    <p className='text-primary text-3xl font-thin mb-3'>How can we help ?</p>
                    <img src={serviceImage} alt="image of two people shaking hands"/>
                </div>
                <div 
                    className='
                        flex flex-col gap-2 mt-2 text-center 
                        md:p-10 md:justify-start md:gap-5 md:w-[40vw]
                    '>
                    <Link to={'/contact'} className={actionLinkStyle}>Contact Us</Link>
                    <Link to={'/accounts'} className={actionLinkStyle}>Open an Account</Link>
                    <Link to={'/loans'} className={actionLinkStyle}>Loan Calculator</Link>
                    <Link to={'/loans'} className={actionLinkStyle}>Apply For a Loan</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage