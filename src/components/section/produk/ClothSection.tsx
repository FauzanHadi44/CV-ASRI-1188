"use client";

import Image from "next/image";
import { Shirt, MessageCircle } from "lucide-react";
import { clothItems, ADMIN_WA } from "@/data/products";

export default function ClothSection() {
    const handleTanyaProduk = (nama: string, img: string) => {
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const imgUrl = `${origin}${img}`;
        const text = `Halo Admin, saya tertarik dengan produk *${nama}*%0A%0AGambar produk:%0A${imgUrl}`;
        window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURI(text)}`, "_blank");
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                        <Shirt className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-brand-navy/50 uppercase tracking-[0.2em] mb-1">
                            PRODUK JADI (DOWNSTREAM)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-brand-navy font-playfair">
                            1188 Cloth
                        </h2>
                        <p className="text-sm font-bold text-green-600 uppercase tracking-wider">
                            Koleksi Pakaian Ready-to-Wear
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {clothItems.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-sm border border-slate-100 group-hover:shadow-xl transition-all duration-500">
                                <Image
                                    src={item.img}
                                    alt={item.nama}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-all duration-500" />
                                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold text-brand-navy shadow-lg text-sm">
                                    {item.harga}
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <button
                                        onClick={() => handleTanyaProduk(item.nama, item.img)}
                                        className="inline-flex items-center gap-2 bg-white text-brand-navy font-bold px-5 py-2.5 rounded-full shadow-lg text-sm whitespace-nowrap hover:bg-brand-navy hover:text-white transition-colors duration-200"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Tanya Produk
                                    </button>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-brand-navy mb-2">{item.nama}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
