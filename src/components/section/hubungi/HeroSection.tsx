import Image from "next/image";

export default function ContactHeroSection() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-800">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image/services/hKontak.jpg"
                    alt="CV ASRI 1188 Office"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1]">
                        Hubungi Kami
                    </h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
                        Silakan hubungi kami untuk pertanyaan, penawaran harga, atau jadwal kunjungan ke pabrik kami. Tim kami siap membantu Anda.
                    </p>
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
