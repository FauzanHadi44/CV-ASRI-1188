import { ScrollText, Scissors, ShoppingBag } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            id: "01",
            icon: ScrollText,
            title: "1188 TEXTILE",
            subtitle: "Material & Bahan Baku",
            description: "Unit bisnis yang berfokus pada perdagangan dan distribusi material kain berkualitas (Cotton, CVC, Fleece, dll) untuk kebutuhan pedagang dan suplai internal.",
            features: [
                "Distribusi Kain",
                "Kualitas Ekspor",
                "Suplai Bahan Baku"
            ]
        },
        {
            id: "02",
            icon: Scissors,
            title: "1188 PRODUCTION",
            subtitle: "Konveksi & Manufaktur",
            description: "Layanan manufaktur garmen spesialis pesanan khusus (custom order) untuk seragam kerja, kaos, jaket, dan rompi instansi atau korporasi.",
            features: [
                "Custom Order",
                "Seragam & Kaos",
                "Presisi Jahitan"
            ]
        },
        {
            id: "03",
            icon: ShoppingBag,
            title: "1188 CLOTH",
            subtitle: "Ritel & Produk Jadi",
            description: "Lini bisnis penjualan pakaian jadi premium (ready-to-wear) yang mengikuti tren pasar dengan standar finishing detail dan rapi.",
            features: [
                "Ready-to-Wear",
                "Brand Fashion",
                "Finishing Premium"
            ]
        }
    ];

    return (
        <section id="layanan" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">
                        LAYANAN KAMI
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-brand-navy leading-tight font-playfair">
                        Solusi Manufaktur Terintegrasi<br />
                        <span className="text-brand-navy/70">(Hulu ke Hilir)</span>
                    </h2>
                    <p className="text-base md:text-lg text-brand-slate max-w-3xl mx-auto leading-relaxed">
                        CV ASRI 1188 mengelola seluruh rantai produksi secara mandiri melalui tiga divisi khusus yang saling terintegrasi, menjamin efisiensi dan kualitas konsisten.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-navy/20"
                            >
                                <div className="absolute top-8 right-8">
                                    <span className="text-6xl font-playfair font-black text-slate-100 group-hover:text-brand-navy/10 transition-colors duration-300">
                                        {service.id}
                                    </span>
                                </div>

                                <div className="relative mb-6">
                                    <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center group-hover:bg-brand-navy group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                <div className="relative space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs font-bold text-brand-slate/60 uppercase tracking-[0.15em]">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-brand-slate leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100">
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <svg
                                                        className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span className="text-brand-slate/80">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-navy/10 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
