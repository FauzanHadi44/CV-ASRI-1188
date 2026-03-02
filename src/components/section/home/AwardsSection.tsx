"use client";

import Image from "next/image";
import { awards } from "@/data/awards";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function AwardsSection() {
    const [selectedAward, setSelectedAward] = useState<typeof awards[0] | null>(null);

    const truncateDescription = (text: string, maxLength: number = 120) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };

    return (
        <section className="relative py-20 bg-slate-50 overflow-hidden border-t border-brand-slate/10">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em] mb-4">
                            DEDIKASI
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6 font-playfair">
                            Jejak Langkah & Apresiasi
                        </h2>
                        <p className="text-base md:text-lg text-brand-slate max-w-3xl mx-auto leading-relaxed">
                            Setiap penghargaan adalah bukti dedikasi kami dalam menghadirkan standar kualitas terbaik dan inovasi berkelanjutan demi ekosistem tekstil nasional yang lebih baik serta manufaktur di Indonesia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {awards.map((award, index) => {
                            const marginTopClass = index % 3 === 0 ? 'md:mt-0' : index % 3 === 1 ? 'md:mt-8' : 'md:mt-4';

                            return (
                                <div
                                    key={award.id}
                                    className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 ${marginTopClass}`}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                        <Image
                                            src={award.image}
                                            alt={award.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                                            <span className="text-2xl font-bold text-brand-navy font-playfair">
                                                {award.year}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-brand-navy mb-3 font-playfair line-clamp-2 min-h-[3.5rem]">
                                            {award.title}
                                        </h3>
                                        <p className="text-sm text-brand-slate leading-relaxed mb-4 line-clamp-3">
                                            {truncateDescription(award.description, 150)}
                                        </p>

                                        <button
                                            onClick={() => setSelectedAward(award)}
                                            className="group/btn flex items-center justify-center gap-2 w-full border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                                        >
                                            <span>Selengkapnya</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-sm md:text-base text-brand-slate/80 italic">
                            Komitmen kami untuk terus berinovasi dan memberikan yang terbaik bagi Indonesia
                        </p>
                    </div>
                </div>
            </div>

            {selectedAward && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedAward(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col md:flex-row max-h-[90vh]">
                            <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-slate-100">
                                <Image
                                    src={selectedAward.image}
                                    alt={selectedAward.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                                <button
                                    onClick={() => setSelectedAward(null)}
                                    className="absolute top-4 right-4 bg-white hover:bg-slate-100 text-brand-navy rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="inline-block bg-gradient-to-r from-brand-accent to-brand-navy text-white px-4 py-2 rounded-full mb-4">
                                    <span className="text-lg font-bold">{selectedAward.year}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 font-playfair leading-tight">
                                    {selectedAward.title}
                                </h3>

                                <p className="text-base text-brand-slate leading-relaxed">
                                    {selectedAward.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
