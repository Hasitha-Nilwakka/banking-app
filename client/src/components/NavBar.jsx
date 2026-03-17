import {NavLink} from 'react-router-dom'
import bankLogo from '@assets/bank-logo.png'
import menuIcon from '@assets/menu.svg'
import Button from '@components/ui/Button'
import MobileNav from '@components/MobileNav'
import { useState } from 'react'
import theme from '@/constants/theme'
import { useCallback } from 'react'

export default function NavBar() {
    const [isMenueOpen, setIsMenueOpen] = useState(false)
    const style = useCallback(({isActive}) => ({
                    color : isActive ? theme.colors.primaryColor : theme.colors.secondaryColor,
                    fontWeight : isActive ? 'bold' : 'normal'
                }),[])
    return (
        <div 
            className='
                flex justify-between items-center 
                md:items-end
                py-5 px-5 
                shadow-sm'
        >
            <img 
                src={bankLogo} 
                alt='premium bank logo' 
            />
            <div className='flex gap-5 items-end'>
                <div className='hidden md:flex gap-5 text-xl'>
                <NavLink 
                    to={'/'}
                    style={style}
                    >Home</NavLink>
                <NavLink 
                    to={'/about'}
                    style={style}
                    >About</NavLink>
                <NavLink 
                    to={'/contact'}
                    style={style}
                    >Contact</NavLink>
            </div>
            <div className='flex gap-3 w-fit h-fit items-center'>
                <Button variant = 'primary' size = 'md'>Login</Button>
                <div className='md:hidden border-2 border-primary-700 p-1.5 rounded-md cursor-pointer hover:translate-y-0.5'
                    onClick={() => setIsMenueOpen(h => !h)}
                >
                    <img 
                        src={menuIcon} 
                        alt="menu icon"/>
                </div>
                <MobileNav onClick={() => setIsMenueOpen(h => !h)} isOpen={isMenueOpen} />
            </div>
            </div>
        </div> 
    )
}