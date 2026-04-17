import type React from "react"

interface StatIconProps {
    title : string,
    children : React.ReactNode
}

export default function StatIcon({title, children} : StatIconProps) {
    return (
        <div className="
            border-2 shadow-sm shadow-nutral border-nutral text-primary text-center px-5 py-2
            rounded-xl transition hover:shadow-md
            lg:w-[20vw]
            ">
            <p className="font-bold text-5xl">{title}</p>
            <p className="text-2xl">{children}</p>
        </div>
    )
}