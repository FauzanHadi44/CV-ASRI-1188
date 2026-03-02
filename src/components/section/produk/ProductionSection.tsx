"use client";

import { Scissors, CheckCircle2, MessageCircle } from "lucide-react";
import { productionItems, ADMIN_WA } from "@/data/products";

export default function ProductionSection() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                        <Scissors className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-brand-navy/50 uppercase tracking-[0.2em] mb-1">
                            MANUFAKTUR (MIDSTREAM)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-brand-navy font-playfair">
                            1188 Production
                        </h2>
                        <p className="text-sm font-bold text-brand-accent uppercase tracking-wider">
                            Jasa Manufaktur Mesin Mandiri
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {productionItems.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-navy/20"
                        >
                            <div className="absolute top-8 right-8">
                                <span className="text-6xl font-playfair font-black text-slate-100 group-hover:text-brand-navy/10 transition-colors duration-300">
                                    {item.id}
                                </span>
                            </div>
                            <div className="relative mb-6">
                                <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center group-hover:bg-brand-navy group-hover:scale-110 transition-all duration-300">
                                    <Scissors className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors duration-300" />
                                </div>
                            </div>

                            <h4 className="text-2xl font-black text-brand-navy mb-2">{item.service}</h4>
                            <p className="text-brand-blue font-bold text-lg mb-6">{item.harga}</p>

                            <ul className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                                {item.fitur.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-brand-slate">
                                        <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/${ADMIN_WA}?text=Halo%20Admin%2C%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(item.service)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-center py-3.5 border-2 border-brand-navy text-brand-navy font-bold rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Konsultasi Produksi
                            </a>
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-navy/10 transition-all duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
