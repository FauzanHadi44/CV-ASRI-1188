export interface TextileItem {
    nama: string;
    ket: string;
    badge: string;
}

export const textileItems: TextileItem[] = [
    {
        nama: "Cotton Combed 30s",
        ket: "Bahan kaos premium paling dicari.",
        badge: "Bestseller",
    },
    {
        nama: "Fleece Soft",
        ket: "Kain hangat untuk hoodie & jacket.",
        badge: "Populer",
    },
    {
        nama: "CVC Fleece",
        ket: "Bahan Hoodie Premium.",
        badge: "Premium",
    },
    {
        nama: "Lacoste Pique",
        ket: "Khusus Kaos Polo.",
        badge: "Eksklusif",
    },
];

export interface ProductionItem {
    id: string;
    service: string;
    harga: string;
    fitur: string[];
}

export const productionItems: ProductionItem[] = [
    {
        id: "01",
        service: "Jasa Jahit Kaos",
        harga: "Hubungin Admin",
        fitur: ["Jahit Rantai", "Overdeck 3 Jarum", "QC Ketat"],
    },
    {
        id: "02",
        service: "Sablon DTF / Manual",
        harga: "Mulai Rp 5.000",
        fitur: ["Tinta Premium", "Presisi Tinggi", "Tahan Lama"],
    },
    {
        id: "03",
        service: "Full Order (CMT)",
        harga: "Harga Nego",
        fitur: ["Bahan + Jahit + Sablon", "Free Packing", "Siap Jual"],
    },
];

export interface ClothItem {
    nama: string;
    harga: string;
    img: string;
}

export const clothItems: ClothItem[] = [
    {
        nama: "Basic Oversized Tee",
        harga: "Rp 8x.000",
        img: "/image/cloth/baju.png",
    },
    {
        nama: "Premium Hoodie",
        harga: "Rp 1xx.000",
        img: "/image/cloth/hoodie.png",
    },
    {
        nama: "Polo Shirt",
        harga: "Rp 9x.000",
        img: "/image/cloth/polo.png",
    },
    {
        nama: "Jaket Zipper",
        harga: "Rp 1xx.000",
        img: "/image/cloth/jaketzp.png",
    },
    {
        nama: "Celana Pendek",
        harga: "Rp 9x.000",
        img: "/image/cloth/cepen.png",
    },
    {
        nama: "Kaos Lengan Panjang",
        harga: "Rp 9x.000",
        img: "/image/cloth/bajupjg.png",
    },
];

export const ADMIN_WA = "6281261490378";
