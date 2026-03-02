import { Button } from "@/components/ui/button";
import { Handshake, Lightbulb, Link2, Factory } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="profil" className="pt-0 pb-20 bg-white -mt-1 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[40%] md:translate-x-[35%] z-0 pointer-events-none select-none">
                <span className="block text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[10rem] leading-none font-black font-sans text-brand-navy/5 rotate-90 tracking-tighter whitespace-nowrap">
                    ASRI1188
                </span>
            </div>
            <div className="container mx-auto px-6 pt-20 relative z-10">
                <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
                    <div>
                        <div className="sticky top-24">
                            <div className="relative inline-block mb-4">
                                <span className="text-8xl md:text-9xl font-playfair font-black text-brand-navy leading-none">
                                    14
                                </span>
                                <sup className="absolute top-4 -right-6 text-4xl font-playfair font-bold text-brand-navy">+</sup>
                            </div>
                            <h3 className="text-xs font-bold text-brand-slate/60 uppercase tracking-[0.2em] mb-4">
                                Tahun Berpengalaman
                            </h3>
                            <p className="text-lg font-medium text-brand-slate/80 leading-snug mb-6 max-w-[200px]">
                                Sejak 2012 mengabdi untuk industri tekstil nasional.
                            </p>
                            <div className="w-12 h-1 bg-brand-navy"></div>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">
                                TENTANG KAMI
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight font-playfair">
                                Pondasi Tekstil Kuat, Produksi Terintegrasi, Visi Global
                            </h2>
                        </div>
                        <div className="space-y-6 text-brand-slate leading-relaxed text-lg">
                            <p>
                                Didirikan pada tahun 2012 oleh <strong>H. Sofyan Hadi, SE</strong> di Kota Tangerang, CV ASRI 1188 mengawali perjalanannya sebagai perusahaan perdagangan tekstil. Berbekal pemahaman mendalam mengenai kualitas serat dan material kain, kami berhasil membangun kepercayaan sebagai penyedia bahan baku yang handal.
                            </p>
                            <p>
                                Kini, kami telah bertransformasi menjadi industri manufaktur lengkap melalui tiga unit bisnis utama: <em>1188 Textile</em>, <em>1188 Production</em>, dan <em>1188 Cloth</em>. Kami menghadirkan solusi dari hulu ke hilir untuk menjaga kualitas terbaik bagi setiap mitra strategis kami.
                            </p>
                        </div>
                        <div className="pt-8 border-t border-brand-slate/10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="space-y-3 md:border-r border-brand-slate/20 md:pr-8">
                                    <Handshake className="w-8 h-8 text-brand-navy" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-sm mb-2 uppercase tracking-wide">A - Andalan</h4>
                                        <p className="text-xs text-brand-slate leading-relaxed">
                                            Mitra strategis yang tangguh bagi klien.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3 md:border-r border-brand-slate/20 md:pr-8">
                                    <Lightbulb className="w-8 h-8 text-brand-navy" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-sm mb-2 uppercase tracking-wide">S - Solusi</h4>
                                        <p className="text-xs text-brand-slate leading-relaxed">
                                            Ekosistem layanan hulu ke hilir.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3 md:border-r border-brand-slate/20 md:pr-8">
                                    <Link2 className="w-8 h-8 text-brand-navy" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-sm mb-2 uppercase tracking-wide">R - Rantai</h4>
                                        <p className="text-xs text-brand-slate leading-relaxed">
                                            Kendali penuh atas rantai pasok.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Factory className="w-8 h-8 text-brand-navy" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-sm mb-2 uppercase tracking-wide">I - Industri</h4>
                                        <p className="text-xs text-brand-slate leading-relaxed">
                                            Kapasitas manajemen skala nasional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}