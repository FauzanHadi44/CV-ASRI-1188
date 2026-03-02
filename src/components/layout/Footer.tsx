import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-brand-navy pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-40 h-16 flex items-center justify-start">
                                <Image
                                    src="/image/logo/logo02.png"
                                    alt="CV ASRI 1188 Logo"
                                    width={160}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            CV ASRI 1188 adalah pusat industri tekstil, konveksi, dan clothing terpercaya yang menyediakan solusi manufaktur dari hulu ke hilir dengan standar kualitas terbaik.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-playfair tracking-wide text-brand-navy">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                <span className="text-slate-600 text-sm leading-relaxed">
                                    Taman Asri Lama No.1,<br />
                                    Cipadu Jaya, Larangan,<br />
                                    Tangerang 15155
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                <div className="text-slate-600 text-sm flex flex-col gap-1">
                                    <a href="tel:+628164822108" className="hover:text-brand-blue transition-colors">+62 816-4822-108</a>
                                    <a href="tel:+6281296667302" className="hover:text-brand-blue transition-colors">+62 812-9666-7302</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                <a href="mailto:info.asri1188@gmail.com" className="text-slate-600 text-sm hover:text-brand-blue transition-colors">
                                    info.asri1188@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-playfair tracking-wide text-brand-navy">Akses Cepat</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#profil" className="text-slate-600 text-sm hover:text-brand-blue transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                    Profil Perusahaan
                                </Link>
                            </li>
                            <li>
                                <Link href="/#layanan" className="text-slate-600 text-sm hover:text-brand-blue transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                    Layanan Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/#klien" className="text-slate-600 text-sm hover:text-brand-blue transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                    Klien & Mitra
                                </Link>
                            </li>
                            <li>
                                <Link href="/company-profile" className="text-slate-600 text-sm hover:text-brand-blue transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                    Company Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-playfair tracking-wide text-brand-navy">Jam Operasional</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-brand-navy font-medium text-sm">Senin - Sabtu</p>
                                    <p className="text-slate-600 text-sm">09:00 - 17:00 WIB</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 opacity-60">
                                <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-brand-navy font-medium text-sm">Minggu</p>
                                    <p className="text-slate-600 text-sm">Libur</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-brand-navy/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} CV ASRI 1188. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-500 text-xs hover:text-brand-navy transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 text-xs hover:text-brand-navy transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
