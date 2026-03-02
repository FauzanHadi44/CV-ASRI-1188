import Image from "next/image";
import { clients } from "@/data/clients";

export default function ClientSection() {
    return (
        <section id="klien" className="relative py-20 bg-slate-50 border-t border-brand-slate/10">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">
                            Kemitraan Strategis
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6 font-playfair">
                            Dipercaya oleh Instansi & Korporasi Nasional
                        </h2>
                        <p className="text-base md:text-lg text-brand-slate max-w-3xl mx-auto leading-relaxed">
                            Sejak 2012, kami telah membangun kemitraan strategis yang solid dengan berbagai lembaga pemerintah dan sektor swasta.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="group relative bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-slate-100"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>
                                <div className="relative w-full h-20 md:h-24 flex items-center justify-center">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 p-2"
                                    />
                                </div>
                                <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
                                        {client.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-sm md:text-base text-brand-slate/80 italic">
                            Dan masih banyak lagi mitra strategis lainnya yang mempercayai kualitas produksi kami
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        </section>
    );
}
