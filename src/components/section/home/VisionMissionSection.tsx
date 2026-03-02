import { vision, missions } from "@/data/vision-mission";
import { Target, Factory, Users, Leaf, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const missionIcons = {
    "01": Factory,
    "02": Users,
    "03": TrendingUp,
    "04": Leaf
};

export default function VisionMissionSection() {
    return (
        <section id="profil" className="relative py-20 bg-white border-t border-brand-slate/10">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">
                            VISI & MISI
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-4xl mx-auto font-playfair">
                            Membangun Industri Berkelanjutan, Memberdayakan Potensi Lokal
                        </h3>
                    </div>

                    <div className="mb-20 bg-[#0F2147] rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex flex-col items-center justify-center flex-shrink-0 w-full md:w-auto md:min-w-[180px] text-center">
                                <div className="w-16 h-16 mb-4 rounded-full border border-white/20 flex items-center justify-center">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-playfair font-bold text-white tracking-wide">
                                    Visi Kami
                                </h4>
                            </div>
                            <div className="hidden md:block w-px h-32 bg-white/20"></div>
                            <div className="md:hidden w-24 h-px bg-white/20"></div>
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
                                    {vision.statement}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-brand-navy">
                            Misi Kami
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                        {missions.map((mission) => {
                            const IconComponent = missionIcons[mission.id as keyof typeof missionIcons];
                            return (
                                <div
                                    key={mission.id}
                                    className="group relative p-6 rounded-lg transition-all duration-300"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <span className="text-5xl font-playfair font-bold text-brand-slate/20 group-hover:text-[#0F2147] transition-colors duration-300">
                                                {mission.id}
                                            </span>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                {IconComponent && (
                                                    <IconComponent className="w-5 h-5 text-brand-navy" />
                                                )}
                                                <h5 className="font-bold text-brand-navy text-sm uppercase tracking-widest font-sans">
                                                    {mission.title}
                                                </h5>
                                            </div>
                                            <p className="text-brand-slate text-base leading-relaxed">
                                                {mission.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="btn-dark text-white px-10 py-7 rounded-sm uppercase tracking-wider font-semibold text-xs shadow-lg hover:shadow-xl transition-all"
                        >
                            <Link href="/company-profile">
                                Lihat Company Portfolio
                            </Link>
                        </Button>
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
                        className="fill-slate-50"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
