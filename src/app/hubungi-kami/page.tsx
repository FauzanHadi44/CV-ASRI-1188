import ContactHeroSection from "@/components/section/hubungi/HeroSection";
import ContactInfoSection from "@/components/section/hubungi/ContactInfoSection";
import ContactFormSection from "@/components/section/hubungi/ContactFormSection";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactFormSection />
        </div>
    );
}
