import FeatureSection from "@/features/home/components/FeatureSection"
import HeroSection from "@/features/home/components/HeroSection"
import StatsSection from "@/features/home/components/StatsSection"
import LinksSection from "@/features/home/components/LinksSection"
import { useRef } from "react"

export default function HomePage() {
    const featureRef = useRef(null)
    function focusFeatures() {
        featureRef.current?.scrollIntoView({behavior : "smooth", block : 'start'})
        featureRef.current?.focus()
    }
    return (
        <div>
            <HeroSection focusClick={focusFeatures}/>
            <FeatureSection ref={featureRef}/>
            <StatsSection />
            <LinksSection />
        </div>
    )
}