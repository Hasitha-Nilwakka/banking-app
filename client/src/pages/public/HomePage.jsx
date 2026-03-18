import FeatureSection from "@/features/home/components/FeatureSection"
import HeroSection from "@/features/home/components/HeroSection"
import StatsSection from "@/features/home/components/StatsSection"

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <StatsSection />
        </div>
    )
}