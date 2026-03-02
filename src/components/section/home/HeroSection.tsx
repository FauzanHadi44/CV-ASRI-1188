import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-800">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Textile Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 overlay-dark z-10"></div>
      </div>

      <div className="container relative z-20 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-bright font-semibold">
              ANDALAN • SOLUSI • RANTAI • INDUSTRI
            </p>
          </div>
          <h1 className="mb-6">
            <div className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-2 heading-white-bold">
              PUSAT INDUSTRI
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white-shadow">
              TEKSTIL, KONVEKSI & CLOTHING
            </div>
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-white-enhanced">
            Pondasi tekstil kuat dengan produksi terintegrasi. Kami hadir sebagai
            mitra strategis manufaktur dari hulu ke hilir untuk kualitas terbaik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="btn-dark px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all group min-w-[200px]"
            >
              <Link href="/layanan" className="flex items-center justify-center gap-2">
                Jelajahi Layanan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="btn-outline-white px-8 py-6 rounded-full transition-all min-w-[200px]"
            >
              <Link href="/kontak" className="flex items-center justify-center">
                Hubungi Kami
              </Link>
            </Button>
          </div>

        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none w-full leading-none overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,80 960,80 1440,0 L1440,100 L0,100 Z"
            className="fill-white"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}