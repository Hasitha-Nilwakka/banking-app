export default function FeatureIcon({img, alt, title, children}) {
    return (
        <div className="
            w-[75vw] 
            flex flex-col 
            mt-5 
            p-5
            items-center

            shadow-md
            shadow-nutral 
            rounded-lg 
            transform-3d

            md:w-[25vw]
            md:min-h-75

            lg:flex-row
            lg:w-[30vw]
            lg:min-h-0
            ">
            <img src={img} alt={alt} className="h-35"/>
            <div className="lg:flex lg:flex-col lg:item-start">
                <h3 className="text-secondary text-2xl font-bold text-center lg:text-left">{title}</h3>
                <p className="text-primary text-xl text-center lg:text-left">{children}</p>
            </div>
        </div>
    )
}