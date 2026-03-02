"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ADMIN_WA } from "@/data/products";

export default function CTABottomSection() {
    return (
        <section className="py-20 bg-slate-50 border-t border-brand-slate/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-navy/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="block text-xs font-bold text-brand-navy/50 uppercase tracking-[0.2em] mb-4">
                    Siap Bermitra?
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 leading-tight font-playfair">
                    Konsultasikan Kebutuhan Anda
                </h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Tim ASRI 1188 siap membantu, mulai dari pemilihan bahan, jasa produksi, hingga produk jadi. Hubungi kami sekarang untuk konsultasi gratis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`https://wa.me/${ADMIN_WA}?text=Halo%20Admin%20CV%20ASRI%201188%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%20Boleh%20minta%20info%20lebih%20lanjut%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-green-500/30 group"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Chat WhatsApp Admin</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                        href="/hubungi-kami"
                        className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 px-8 rounded-full hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/20"
                    >
                        Halaman Kontak
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-full h-[60px] md:h-[120px] drop-shadow-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
