import Link from "next/link";
import Image from "next/image";

export default function ProdukHeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-800">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image/services/hProduk.jpg"
                    alt="Fasilitas Produksi CV ASRI 1188"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10 z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-[1.1]">
                        Produk &{" "}
                        <br />
                        <span className="text-brand-navy">Layanan</span> Kami
                    </h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto mb-4">
                        Dari penyediaan bahan kain terbaik, jasa produksi profesional dengan mesin mandiri, hingga produk fashion siap pakai. Semua dalam satu pintu di CV ASRI 1188.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/hubungi-kami"
                            className="inline-flex items-center justify-center bg-brand-navy text-white font-bold py-3.5 px-8 rounded-full hover:bg-brand-navy/80 transition-all duration-300 shadow-lg shadow-brand-navy/20"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none w-full leading-none overflow-hidden">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto block"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C480,70 960,70 1440,0 L1440,80 L0,80 Z"
                        fill="#ffffff"
                        stroke="none"
                    />
                </svg>
            </div>
        </section>
    );
}
