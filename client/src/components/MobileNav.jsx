export default function MobileNav({onClick, isOpen}) {
    return (
        <div className={`
                fixed inset-0 flex justify-end
                bg-black/70
                transition-opacity duration-1000
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none hidden"}`} 
            onClick={onClick}> 
            <div 
            onClick={(e) => e.stopPropagation()}
            className={`
                    p-5
                    shadow-2xl
                    h-full
                    w-1/2
                    flex flex-col gap-7
                    text-2xl
                    bg-white
                    transform transition-transform duration-1000 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
            <p>Login</p>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            </div>
        </div>
    )
}