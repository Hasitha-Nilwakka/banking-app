import {NavLink} from 'react-router-dom'
import navStyles from '@/utils/navStyles'
import Button from '@components/ui/Button'

export default function MobileNav({onClick, isOpen}) {
    const linkStyle = navStyles
    return (
        <div className={`
                fixed inset-0 flex justify-end
                bg-black/70
                transition-opacity duration-300
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
            onClick={onClick}> 
            <div 
            onClick={(e) => e.stopPropagation()}
            className={`
                    p-5
                    shadow-2xl
                    h-full
                    w-1/2
                    flex flex-col gap-7
                    text-xl
                    bg-white
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
            <Button variant = 'primary' size = 'md'>Login</Button>
            <NavLink
                to={'/'}
                style={linkStyle}
            >Home</NavLink>
            <NavLink
                to={'/accounts'}
                style={linkStyle}
            >Accounts</NavLink>
            <NavLink
                to={'/loans'}
                style={linkStyle}
            >Loans</NavLink>
            <NavLink
                to={'/contact'}
                style={linkStyle}
            >Contact</NavLink>
            </div>
        </div>
    )
}