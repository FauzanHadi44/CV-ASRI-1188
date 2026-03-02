import { Store, Scissors, Shirt, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhyUsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">
                        SOLUSI MANUFAKTUR SATU PINTU
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6 font-playfair">
                        Kenapa Ribuan Klien Memilih <br /> <span className="text-brand-navy/70">ASRI 1188?</span>
                    </h2>
                    <p className="text-base md:text-lg text-brand-slate leading-relaxed">
                        Ekosistem hulu ke hilir dalam satu atap. Kami memiliki aset sendiri, bukan makelar.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,38,92,0.12)] overflow-hidden relative">
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="grid lg:grid-cols-3 gap-12 relative">
                            <div className="hidden lg:block absolute top-12 left-[30%] text-brand-slate/20">
                                <ArrowRight className="w-12 h-12" />
                            </div>
                            <div className="hidden lg:block absolute top-12 right-[30%] text-brand-slate/20">
                                <ArrowRight className="w-12 h-12" />
                            </div>
                            <div className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-brand-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 relative z-10">
                                        <Store className="w-10 h-10" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-brand-slate/10 rounded-full flex items-center justify-center text-xs font-bold text-brand-navy shadow-sm">
                                            01
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-navy mb-3 font-playfair">
                                        Bandar Tekstil Cipadu
                                    </h3>
                                    <p className="text-[10px] font-bold text-brand-slate/60 uppercase tracking-widest mb-4">
                                        SUPPLIER TANGAN PERTAMA
                                    </p>
                                    <p className="text-brand-slate text-sm leading-relaxed mb-6">
                                        Pemain utama di pusat tekstil Cipadu. Kami menjamin stok ribuan yard bahan (Cotton, CVC, Fleece) dengan harga tangan pertama.
                                    </p>

                                    <div className="bg-brand-slate/5 rounded-xl p-4 w-full text-left">
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Stok Stabil & Ready.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Variasi Warna Lengkap.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="block lg:hidden w-full h-px bg-brand-slate/10 my-8"></div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-brand-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 relative z-10">
                                        <Scissors className="w-10 h-10" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-brand-slate/10 rounded-full flex items-center justify-center text-xs font-bold text-brand-navy shadow-sm">
                                            02
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-navy mb-3 font-playfair">
                                        Infrastruktur Mandiri
                                    </h3>
                                    <p className="text-[10px] font-bold text-brand-slate/60 uppercase tracking-widest mb-4">
                                        KEPEMILIKAN MESIN MANDIRI
                                    </p>
                                    <p className="text-brand-slate text-sm leading-relaxed mb-6">
                                        Bukan makelar. Kami memproduksi di pabrik sendiri dengan <strong>Mesin Jahit Industrial</strong> dan <strong>Mesin Sablon DTF</strong> terkini.
                                    </p>

                                    <div className="bg-brand-slate/5 rounded-xl p-4 w-full text-left">
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Kualitas Terkontrol Penuh.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Kapasitas Ribuan Pcs.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="block lg:hidden w-full h-px bg-brand-slate/10 my-8"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-brand-navy/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 relative z-10">
                                        <Shirt className="w-10 h-10" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-brand-slate/10 rounded-full flex items-center justify-center text-xs font-bold text-brand-navy shadow-sm">
                                            03
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-navy mb-3 font-playfair">
                                        Produk Jadi Termurah
                                    </h3>
                                    <p className="text-[10px] font-bold text-brand-slate/60 uppercase tracking-widest mb-4">
                                        HARGA PABRIK LANGSUNG
                                    </p>
                                    <p className="text-brand-slate text-sm leading-relaxed mb-6">
                                        Potong rantai distribusi! Bahan milik sendiri + mesin sendiri = Produk jadi (Kaos/Celana) dengan harga pabrik yang sangat kompetitif.
                                    </p>

                                    <div className="bg-brand-slate/5 rounded-xl p-4 w-full text-left">
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Tanpa Markup Perantara.</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs font-medium text-brand-slate">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy mt-0.5 shrink-0" />
                                                <span>Standar Finishing Ritel.</span>
                                            </li>
                                        </ul>
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
