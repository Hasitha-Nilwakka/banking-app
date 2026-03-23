import Button from "../../../components/ui/Button"
export default function FeatureCard({children, header, btn}) {
    return (
        <div className='
            flex flex-col p-7 w-[70vw] shadow-xl rounded-lg text-center gap-2
            md:w-[40vw] md:gap-4
            lg:w-[22vw] lg:rounded-xl
            bg-white
        '
        >
            <h3 className="
                text-2xl text-accent-700
            ">{header}</h3>
            <p className="
                text-lg text-secondary-500
            ">{children}</p>
            <Button>{btn.text}</Button>
        </div>
    )
}