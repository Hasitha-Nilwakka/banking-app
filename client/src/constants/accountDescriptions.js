import savingsAccIcon from '@assets/savings-ico.png'
import checkingAccIcon from '@assets/checking-ico.png'
import premiumAccIcon from '@assets/premium-acc-ico.png'

const accountsWebPage = [
    {
        name : 'Savings Account',
        varName : 'savings',
        image : savingsAccIcon,
        alt : 'illustration of a piggy bank',
        shortDescription : 'Grow your money over time with competitive interest rates and easy access whenever you need it. Ideal for building financial security and reaching long-term goals.',
        featureList : ['Earn competitive interest',
                        'Save with flexible deposits',
                        'Access funds anytime',
                        'Automate your savings',
                        'Low or no monthly fees',
                        'Secure and protected funds',
                        'Track savings goals easily',
                        'Manage via mobile app']
    },
    {
        name : 'Current Account',
        varName : 'current',
        image : checkingAccIcon,
        alt : 'illustration of calculator and documents',
        shortDescription : 'Manage everyday spending with ease, including payments, transfers, and direct debits. Designed for convenient, flexible access to your money anytime.',
        featureList : ['Pay and transfer instantly',
                        'Use your debit card worldwide',
                        'Set up automatic payments',
                        'Optional overdraft support',
                        'Track spending in real time',
                        'Bank on your mobile',
                        '24/7 account access',
                        'Simple, everyday money management']
    },
    {
        name : 'Premium Account',
        varName : 'premium',
        image : premiumAccIcon,
        alt : 'illustration of a dollar mark and shaking hands',
        shortDescription : 'Enjoy enhanced banking benefits such as higher limits, exclusive perks, and priority support. Perfect for customers looking for a more tailored, premium financial experience.',
        featureList : ['Higher payment limits',
                        'Priority customer support',
                        'Earn rewards and cashback',
                        'Enjoy travel perks',
                        'Preferential interest rates',
                        'Advanced financial insights',
                        'Reduced or no fees',
                        'Exclusive lifestyle benefits']
    }
] 

export default accountsWebPage