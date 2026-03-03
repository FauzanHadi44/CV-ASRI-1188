"use client";

import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Gagal mengirim pesan.");
            }

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });

            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="py-20 pb-40 bg-brand-light relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
                        <h2 className="text-2xl md:text-3xl font-bold font-playfair text-brand-navy mb-2">
                            Kirim Pesan
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Isi formulir di bawah ini dan pesan Anda akan langsung dikirim ke email kami.
                        </p>

                        {status === "success" && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-green-700 text-sm font-medium">Pesan berhasil dikirim!</p>
                                    <p className="text-green-600 text-xs mt-1">Kami akan segera menghubungi Anda. Jika Anda mengisi email, cek inbox untuk konfirmasi otomatis.</p>
                                </div>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                <p className="text-red-700 text-sm font-medium">{errorMsg}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-sm"
                                    placeholder="Masukkan nama Anda"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-sm"
                                        placeholder="email@contoh.com"
                                    />
                                    <p className="text-xs text-slate-400 mt-1.5">Isi email untuk menerima konfirmasi otomatis</p>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                        No. Telepon / WA <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-sm"
                                        placeholder="08123456789"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Pesan / Keperluan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-all text-sm resize-none"
                                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-brand-navy text-white font-bold py-4 rounded-full hover:bg-brand-navy/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Kirim Pesan
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-brand-navy mb-2">
                                Lokasi Kami
                            </h2>
                            <p className="text-slate-600">
                                Kunjungi kantor & pabrik kami di Tangerang.
                            </p>
                        </div>
                        <div className="w-full h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1398550466674!2d106.73125227503463!3d-6.245293661152439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f099f2d7edf7%3A0x613c41661f7ee569!2sASRI%201188!5e0!3m2!1sen!2sid!4v1772441763535!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Peta Lokasi CV ASRI 1188"
                            ></iframe>
                        </div>
                        <div className="bg-brand-navy rounded-2xl p-6 text-white">
                            <p className="font-bold text-lg mb-1">Butuh respons cepat?</p>
                            <p className="text-slate-300 text-sm mb-4">Hubungi kami langsung via WhatsApp untuk respons lebih cepat.</p>
                            <a
                                href="https://wa.me/6281296667302?text=Halo%20Admin%20CV%20ASRI%201188%2C%20saya%20ingin%20bertanya."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 text-sm"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Chat via WhatsApp
                            </a>
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
