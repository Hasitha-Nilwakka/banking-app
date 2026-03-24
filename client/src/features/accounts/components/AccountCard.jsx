import { useState, useContext } from "react"
import { AccContext } from "@/pages/public/AccountsPage"
import Button from "@/components/ui/Button"

export default function AccountCard({img, alt, name, text, features, varName}) {
    const [hidden, setHidden] = useState(true)
    const {selectAccount, focusAccRef} = useContext(AccContext)

    function flipHidden() {
        setHidden(h => !h)
    }

    function handleClick(name) {
        selectAccount(name)
        focusAccRef()
    }
    return (
        <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl gap-4 w-[70vw]">
            <div>
                <h2 className="text-accent-700 text-2xl font-bold">{name}</h2>
            </div>
            <div>
                <img src={img} alt={alt} className="h-25"/>
            </div>
            <div className="text-secondary-700 text-lg italic">
                <p>{text}</p>
            </div>
            <div onClick={flipHidden} hidden={hidden ? false : true} className="hover:cursor-pointer" aria-label="Click here to expand the benefits list">
                <p className="text-primary-700 text-md italic">See More ↓</p>
            </div>
            <div hidden={hidden ? true : false}>
                {features.map((feature, i) => {
                    return <p key={i} className="text-primary-700 text-lg mb-1">{`- ${feature}`}</p>
                })}
                <p className="text-secondary-500 text-md italic hover:cursor-pointer" onClick={flipHidden} aria-label="Click here to fold the benefits list">See Less ↑</p>
            </div>
            <Button onClick={() => handleClick(varName)}>{`Open ${name}`}</Button>
        </div>
    )
}