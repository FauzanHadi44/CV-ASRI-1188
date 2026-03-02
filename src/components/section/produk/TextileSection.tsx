"use client";

import { Layers, MessageCircle, ArrowRight, PhoneCall, ImageOff } from "lucide-react";
import { textileItems, ADMIN_WA } from "@/data/products";

export default function TextileSection() {
    return (
        <section id="katalog" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center shrink-0">
                        <Layers className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-brand-navy/50 uppercase tracking-[0.2em] mb-1">
                            HULU (UPSTREAM)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-brand-navy font-playfair">
                            1188 Textile
                        </h2>
                        <p className="text-sm font-bold text-brand-blue uppercase tracking-wider">
                            Suplai Bahan Kain Tangan Pertama
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {textileItems.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-navy/20"
                        >
                            <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden flex flex-col items-center justify-center gap-3">
                                <div className="w-16 h-16 bg-slate-200/80 rounded-full flex items-center justify-center">
                                    <ImageOff className="w-8 h-8 text-slate-400" />
                                </div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Foto belum tersedia
                                </p>
                                <span className="absolute top-3 right-3 text-[10px] font-bold bg-brand-navy text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                                    {item.badge}
                                </span>
                            </div>
                            <div className="p-5">
                                <h4 className="font-black text-brand-navy text-lg mb-1">{item.nama}</h4>
                                <p className="text-brand-slate text-sm leading-relaxed mb-3">{item.ket}</p>
                                <p className="text-xs font-bold text-brand-slate/60 flex items-center gap-1.5">
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    Chat admin untuk info harga
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative bg-brand-navy rounded-2xl overflow-hidden p-8 md:p-10">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute left-1/2 bottom-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-[60px] translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                <PhoneCall className="w-4 h-4 text-slate-300" />
                                <span className="text-slate-300 text-xs font-bold uppercase tracking-[0.2em]">
                                    Ingin Tahu Lebih Lanjut?
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                                Tanya Stok & Harga Bahan Langsung ke Admin
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base max-w-lg mb-3">
                                Harga bahan bisa berubah sewaktu-waktu. Dapatkan info harga terkini, pilihan warna, dan minimum order langsung dari tim kami via WhatsApp.
                            </p>
                            <p className="text-slate-300 text-sm font-semibold flex items-center gap-2 justify-center md:justify-start">
                                <Layers className="w-4 h-4" />
                                Tersedia <strong className="text-red-500">10+ jenis bahan</strong> lainnya selain yang ditampilkan di atas.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 shrink-0">
                            <a
                                href={`https://wa.me/${ADMIN_WA}?text=Halo%20Admin%20CV%20ASRI%201188%2C%20saya%20ingin%20tanya%20lebih%20lanjut%20tentang%20stok%20bahan%20kain%20yang%20tersedia.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 px-7 rounded-full transition-all shadow-lg shadow-green-500/30 group whitespace-nowrap"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Chat Admin Sekarang</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
