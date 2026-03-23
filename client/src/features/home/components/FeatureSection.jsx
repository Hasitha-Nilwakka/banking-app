import FeatureCard from "@/features/home/components/FeatureCard"
import { forwardRef } from "react"

const FeatureSection = forwardRef((props, ref) => (
    <div className="
        bg-primary-500
        flex flex-col items-center gap-5 py-8 
        md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-center md:mt-8 md:px-5
        lg:grid-cols-4 lg:grid-rows-1
    "
    ref={ref}
    tabIndex={-1}
    >
        <FeatureCard 
            header='Instant Transfers' 
            btn={{text: 'Open Account'}} 
        >Send and receive money in seconds. Whether it’s paying friends or moving funds between accounts, everything happens in real time.</FeatureCard>
        <FeatureCard 
            header='Flexible Loans' 
            btn={{text: 'Apply Now'}}  
        >Apply in minutes with a simple, hassle-free process. Enjoy competitive, affordable rates designed to fit your budget and financial goals</FeatureCard>
        <FeatureCard 
            header='24/7 Customer Support' 
            btn={{text: 'Contact Us'}}
        >Get help whenever you need it. Our experinced customer support team is available around the clock via chat, phone, or email.</FeatureCard>
        <FeatureCard 
            header='Secure Online Banking' 
            btn={{text: 'Learn More'}} 
        >Manage your finances anytime, anywhere with industry-leading security. Your data is protected with advanced encryption and multi-factor authentication.</FeatureCard>
    </div>
))

FeatureSection.displayName = 'FeatureSection'

export default FeatureSection