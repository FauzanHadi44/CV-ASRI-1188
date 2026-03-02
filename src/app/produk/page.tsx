import ProdukHeroSection from "@/components/section/produk/HeroSection";
import TextileSection from "@/components/section/produk/TextileSection";
import ProductionSection from "@/components/section/produk/ProductionSection";
import ClothSection from "@/components/section/produk/ClothSection";
import CTABottomSection from "@/components/section/produk/CTABottomSection";

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            <ProdukHeroSection />
            <TextileSection />
            <ProductionSection />
            <ClothSection />
            <CTABottomSection />
        </div>
    );
}
