import FeatureCard from "./FeatureCard";
import accountsWebPage from "@/constants/accountDescriptions";

//forward ref

export default function FeatureSection() {
    return (
        <div className="flex flex-col items-center mt-5 mb-5">
            {accountsWebPage.map((account,i) => {
                return <FeatureCard
                        key={i}
                        name={account.name}
                        img={account.image}
                        alt={account.alt}
                        text={account.shortDescription}
                        features={account.featureList}
                        />
            })}
        </div>
    )
}