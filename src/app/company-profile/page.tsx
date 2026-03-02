"use client";

export default function CompanyProfilePage() {
    const pdfUrl = "/pdf/COMPRO_ASRI1188.pdf";

    return (
        <div className="flex flex-col min-h-screen bg-white pt-32">
            <header className="px-6 py-4 flex flex-col items-center justify-center z-10">
                <h1 className="font-bold text-brand-navy text-xl md:text-2xl text-center mb-4">
                    Company Profile - CV ASRI 1188
                </h1>
                <p className="text-brand-slate text-center max-w-2xl mx-auto leading-relaxed">
                    Pelajari lebih lanjut tentang perjalanan, visi, misi, dan layanan unggulan kami melalui dokumen profil perusahaan berikut. Kami berdedikasi untuk memberikan solusi tekstil dan konveksi terbaik bagi mitra kami.
                </p>
            </header>
            <main className="flex-1 relative w-full px-4 md:px-8 pb-10">
                <div className="w-full flex justify-center">
                    <iframe
                        src={`${pdfUrl}#view=FitH`}
                        className="w-full max-w-6xl h-screen bg-white shadow-2xl rounded-lg border border-slate-200"
                        title="Company Profile PDF"
                    >
                        <p className="text-center p-8 bg-white rounded-lg shadow">
                            Browser Anda tidak mendukung preview PDF.
                            <br />
                            Silakan <a href={pdfUrl} className="text-blue-600 underline font-bold">Download PDF</a> untuk melihatnya.
                        </p>
                    </iframe>
                </div>
            </main>
        </div>
    );
}
