import HeroSection from "@/components/section/home/HeroSection";
import AboutSection from "@/components/section/home/AboutSection";
import VisionMissionSection from "@/components/section/home/VisionMissionSection";
import ServicesSection from "@/components/section/home/ServicesSection";
import ClientSection from "@/components/section/home/ClientSection";
import AwardsSection from "@/components/section/home/AwardsSection";
import WhyUsSection from "@/components/section/home/WhyUsSection";
import CTAOrderSection from "@/components/section/home/CTAOrderSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <ClientSection />
      <AwardsSection />
      <WhyUsSection />
      <CTAOrderSection />
    </main>
  );
}