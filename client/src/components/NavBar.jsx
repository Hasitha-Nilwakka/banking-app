import {NavLink} from 'react-router-dom'
import bankLogo from '@assets/bank-logo.png'
import menuIcon from '@assets/menu.svg'
import Button from '@components/ui/Button'
import MobileNav from '@components/MobileNav'
import { useState, useCallback } from 'react'
import navStyles from '@/utils/navStyles'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const style = navStyles
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
                    to={'/accounts'}
                    style={style}
                    >Accounts</NavLink>
                <NavLink 
                    to={'/loans'}
                    style={style}
                    >Loans</NavLink>
                <NavLink 
                    to={'/contact'}
                    style={style}
                    >Contact</NavLink>
            </div>
            <div className='flex gap-3 w-fit h-fit items-center'>
                <Button variant = 'primary' size = 'md'>Login</Button>
                <div className='md:hidden border-2 border-primary-700 p-1.5 rounded-md cursor-pointer hover:translate-y-0.5'
                    onClick={() => setIsMenuOpen(h => !h)}
                >
                    <img 
                        src={menuIcon} 
                        alt="menu icon"/>
                </div>
                <MobileNav onClick={() => setIsMenuOpen(h => !h)} isOpen={isMenuOpen} />
            </div>
            </div>
        </div> 
    )
}