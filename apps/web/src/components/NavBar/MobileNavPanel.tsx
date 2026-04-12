import { Link } from "react-router-dom"

export default function MobileNavPanel({hidePanel, isHidden}) {
    return (
        <div className={`absolute top-0 right-0 w-full  h-full z-50 flex transition-opacity duration-300 ease-in-out ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`w-[50vw] bg-black/40 backdrop-blur-sm ${isHidden ? 'opacity-0' : 'opacity-60'} transition-opacity duration-300 ease-in-out`}
                onClick={hidePanel}
            >

            </div>
            <div className={`flex flex-col bg-nutral w-[50vw] gap-5 p-5 text-lg font-semibold transform transition-transform duration-300 ease-in-out ${isHidden ? 'translate-x-full scale-95' : 'translate-x-0 scale-100'}`}>
                <Link to={''} 
                    className="bg-primary text-nutral py-3 px-7 rounded-lg
                                hover:py-4  transition-all hover:shadow-xs text-center"
                    onClick={hidePanel}
                >Login</Link>
                <Link to={'/'} className="text-primary border-2 font-bold border-primary rounded-4xl px-5 py-2 text-center shadow-lg " onClick={hidePanel}>
                    <div className="flex justify-between px-2">
                        <p>Home</p>
                        <p>→</p>
                    </div>
                </Link>
                <Link to={'/accounts'} className="text-primary border-2 font-bold border-primary rounded-4xl px-5 py-2 text-center shadow-lg " onClick={hidePanel}>
                    <div className="flex justify-between px-2">
                        <p>Accounts</p>
                        <p>→</p>
                    </div>
                </Link>
                <Link to={'/loans'} className="text-primary border-2 font-bold border-primary rounded-4xl px-5 py-2 text-center shadow-lg " onClick={hidePanel}>
                    <div className="flex justify-between px-2">
                        <p>Loans</p>
                        <p>→</p>
                    </div>
                </Link>
                <Link to={'/contact'} className="text-primary border-2 font-bold border-primary rounded-4xl px-5 py-2 text-center shadow-lg" onClick={hidePanel}>
                    <div className="flex justify-between px-2">
                        <p>Contact</p>
                        <p>→</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}