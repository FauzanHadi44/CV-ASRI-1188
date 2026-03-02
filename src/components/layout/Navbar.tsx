"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (pathname !== "/") return;

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sectionIds = ["profil", "layanan", "klien", "penghargaan", "keunggulan", "kontak-order"];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    const navLinks = [
        { label: "Profil", href: "/#profil", type: "scroll", targetId: "profil" },
        { label: "Layanan", href: "/#layanan", type: "scroll", targetId: "layanan" },
        { label: "Klien", href: "/#klien", type: "scroll", targetId: "klien" },
        { label: "Produk", href: "/produk", type: "page", targetId: null },
    ];

    const isActive = (link: typeof navLinks[0]) => {
        if (pathname === "/" && link.type === "scroll") {
            if (link.targetId === "klien" && (activeSection === "penghargaan" || activeSection === "keunggulan")) {
                return true;
            }
            return activeSection === link.targetId;
        }
        if (link.type === "page") {
            return pathname === link.href;
        }
        return false;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14 flex-shrink-0">
                        <Image
                            src="/image/logo/logo02.png"
                            alt="ASRI 1188 Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 relative group ${isActive(link) ? "text-blue-600" : "text-brand-navy hover:text-blue-600"
                                    }`}
                                onClick={(e) => {
                                    if (pathname === "/" && link.type === "scroll") {
                                        e.preventDefault();
                                        const element = document.getElementById(link.targetId!);
                                        if (element) {
                                            const headerOffset = 100;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                    }
                                }}
                            >
                                {link.label}
                                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${isActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:block">
                        <Link
                            href="/hubungi-kami"
                            className="btn-dark text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-brand-navy hover:text-blue-600 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-widest py-2 border-b border-slate-100 ${isActive(link) ? "text-blue-600" : "text-brand-navy"
                                }`}
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                if (pathname === "/" && link.type === "scroll") {
                                    e.preventDefault();
                                    const element = document.getElementById(link.targetId!);
                                    if (element) {
                                        const headerOffset = 100;
                                        const elementPosition = element.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }
                                }
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/hubungi-kami"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-brand-navy text-white text-center py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors mt-4"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </header>
    );
}
