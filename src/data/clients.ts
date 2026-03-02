export interface Client {
    id: string;
    name: string;
    logo: string;
    category?: string;
}

export const clients: Client[] = [
    {
        id: "1",
        name: "Bank BNI",
        logo: "/image/klien/bni.png",
        category: "Perbankan"
    },
    {
        id: "2",
        name: "Bank BRI",
        logo: "/image/klien/bri.png",
        category: "Perbankan"
    },
    {
        id: "3",
        name: "Angkasa Pura II",
        logo: "/image/klien/soekarnohatta.png",
        category: "Pemerintah"
    },
    {
        id: "4",
        name: "Polyware",
        logo: "/image/klien/polyware.png",
        category: "Swasta"
    },
    {
        id: "5",
        name: "Badan Gizi Nasional",
        logo: "/image/klien/mbg.png",
        category: "Pemerintah"
    },
    {
        id: "6",
        name: "Ayana Midplaza",
        logo: "/image/klien/ayana.png",
        category: "Swasta"
    },
    {
        id: "7",
        name: "KAHMI",
        logo: "/image/klien/kahmi.jpg",
        category: "Organisasi"
    },
    {
        id: "8",
        name: "JSFW 2025",
        logo: "/image/klien/jsfw.jpg",
        category: "Event"
    }
];
