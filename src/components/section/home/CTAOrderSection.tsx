import { MessageCircle, ShoppingBag, Scissors, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTAOrderSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden border-t border-brand-slate/10 pb-42">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-navy/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-navy/50 font-bold tracking-widest text-xs uppercase mb-2 block">
                            Siap Bermitra?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-brand-navy">
                            Terima Pesanan Baju<br /> & Suplai Tekstil
                        </h2>
                        <p className="text-brand-slate text-lg leading-relaxed mb-8 max-w-lg">
                            Apapun kebutuhan Anda, mulai dari beli bahan kain, jasa jahit custom, hingga beli baju jadi, tim ASRI 1188 siap melayani dengan standar kualitas terbaik.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default">
                                <Layers className="w-8 h-8 text-brand-navy mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-brand-navy mb-1">Order Textile</h4>
                                <p className="text-xs text-brand-slate">Beli bahan kain Cotton, CVC, Fleece.</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default">
                                <Scissors className="w-8 h-8 text-brand-navy mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-brand-navy mb-1">Jasa Konveksi</h4>
                                <p className="text-xs text-brand-slate">Jahit seragam, kaos event, jaket.</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default">
                                <ShoppingBag className="w-8 h-8 text-brand-navy mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-brand-navy mb-1">Beli Cloth</h4>
                                <p className="text-xs text-brand-slate">Produk jadi retail & fashion.</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/6281296667302?text=Halo%20Admin%20CV%20ASRI%201188%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%20Boleh%20minta%20info%20lebih%20lanjut%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-green-500/30 group"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Chat WhatsApp Admin</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/produk"
                                className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 px-8 rounded-full hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/20"
                            >
                                Lihat Katalog Produk
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500 bg-slate-100 aspect-video">
                            <Image
                                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                                alt="Layanan ASRI 1188"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 right-6 bg-white text-brand-navy font-black text-sm px-4 py-2 rounded shadow-lg transform rotate-3">
                                CUSTOM ORDER AVAILABLE!
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-brand-navy p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                            <p className="text-white font-bold text-lg mb-1">Gratis Konsultasi</p>
                            <p className="text-slate-300 text-xs">Diskusikan kebutuhan kain & jahit Anda sekarang.</p>
                        </div>
                    </div>
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
