import { Link } from "react-router-dom"
import NavBarLogo from '../../assets/mainlogo.png'
import hamburg from '../../assets/hamburg.png'
import MobileNavPanel from "./MobileNavPanel"
import { useState } from "react"

export default function NavBar() {
    const [isHidden, setIsHidden] = useState(true)
    function hidePannel() {
        setIsHidden(true)
    }
    return (
        <div className="bg-nutral flex justify-between items-center md:py-5">
            <div className="px-5">
                <img src={NavBarLogo} alt="logo of premium bank, the text reads Premium Bank" />
            </div>
            <div className="md:flex gap-10 text-primary text-xl font-semibold subpixel-antialiased px-10 items-center hidden">
                <Link to={'/'}>Home</Link>
                <Link to={'/accounts'}>Accounts</Link>
                <Link to={'/loans'}>Loans</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={''} 
                    className="bg-primary text-nutral py-2 px-7 rounded-lg
                                hover:py-3  transition-all hover:shadow-xs"
                >Login</Link>
            </div>
            <div className="block md:hidden mr-5 shadow-xs shadow-primary hover:translate-y-1 cursor-pointer transition-transform rounded-lg p-0.5"
                onClick={() => setIsHidden(h => !h)}
            >
                <img src={hamburg} alt="" />
            </div>
            {!isHidden ? <MobileNavPanel hidePanel={hidePannel} isHidden={isHidden}/> : null}
        </div>
    )
}