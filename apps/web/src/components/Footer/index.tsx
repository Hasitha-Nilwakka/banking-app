import mainlogo from '../../assets/mainlogo.png'
export default function Footer() {
    return (
        <div className='bg-nutral flex flex-col gap-2 p-5 text-lg text-primary md:items-start md:gap-10 lg:text-xl'>
            <div className='flex flex-col gap-3 items-center md:flex-row'>
                <div className='flex flex-col gap-1 items-center'>
                    <img src={mainlogo} alt="logo of the bank reading premium bank" />
                    <p className='text-center italic'>Secure, modern banking designed to help you manage, save, and grow your money with confidence.</p>
                </div>
                <div className='flex w-full justify-around md:justify-between md:pl-10 lg:pl-40'>
                    <div>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Mobile App</p>
                        <p>Security</p>
                        <p>Integrations</p>
                    </div>
                    <div>
                        <p>About Us</p>              
                        <p>Careers</p>             
                        <p>Blog</p>          
                        <p>प्रेस / Press</p>
                        <p>Partners</p>          
                    </div>
                </div>
                <div className='flex w-full flex-col px-18 md:pl-20 lg:pl-75'>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Community</p>
                    <p>Status</p>
                </div>
            </div>
            <div className='flex w-full flex-col px-18 md:flex-row md:gap-4'>
                <p>© 2026 Premium Bank. All rights reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
                <p>Security</p>
            </div>
        </div>
    )
}