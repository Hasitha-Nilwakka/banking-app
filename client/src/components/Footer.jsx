import bankLogo from '@assets/bank-logo.png'
export default function Footer() {
    return (
        <div className="bg-primary-500 text-amber-50 text-lg py-5 px-5 flex gap-10 md:justify-between lg:pr-80">
            <div className='flex gap-10 lg:gap-60'>
                <div>
                    <p>Home</p>
                    <p>Accounts</p>
                    <p>Loans</p>
                    <p>Contact Us</p>
                    <p>Find us on Map</p>
                    <p>About us</p>
                </div>
                <div>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>YouTube</p>
                    <p>Sustainability Report</p>
                    <p>Annual Report</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={bankLogo} alt="bank logo" />
            </div>
        </div>
    )
}