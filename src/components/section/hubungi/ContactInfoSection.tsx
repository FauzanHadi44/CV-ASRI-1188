import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfoSection() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Alamat Kantor & Pabrik",
            content: (
                <p className="text-slate-600 leading-relaxed">
                    Taman Asri Lama No.1,<br />
                    Cipadu Jaya, Larangan,<br />
                    Tangerang 15155
                </p>
            ),
        },
        {
            icon: Phone,
            title: "Telepon & WhatsApp",
            content: (
                <div className="flex flex-col gap-1">
                    <a href="tel:+628164822108" className="text-slate-600 hover:text-brand-navy transition-colors">+62 816-4822-108</a>
                    <a href="tel:+6281261490378" className="text-slate-600 hover:text-brand-navy transition-colors">+62 812-6149-0378</a>
                </div>
            ),
        },
        {
            icon: Mail,
            title: "Email",
            content: (
                <a href="mailto:info.asri1188@gmail.com" className="text-slate-600 hover:text-brand-navy transition-colors">
                    info.asri1188@gmail.com
                </a>
            ),
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            content: (
                <div className="text-slate-600">
                    <p>Senin - Sabtu: 08:00 - 17:00 WIB</p>
                    <p>Minggu: Libur</p>
                </div>
            ),
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="block text-xs font-bold text-brand-navy/50 uppercase tracking-[0.2em] mb-3">
                        INFORMASI KONTAK
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-brand-navy font-playfair">
                        Cara Menghubungi Kami
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactInfo.map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-navy group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy mb-3">{item.title}</h3>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
