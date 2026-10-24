// UNTUK PRODUK dan PROMO
const rawProducts = {
    "1": {
        id: "1",
        name: "Cireng Salju Kuah Keju Creamy",
        category: "fastfood",
        isPromo: true,
        image: "assets/image/produk/Cireng Salju Kuah Keju Creamy.jpg",
        description: "Perpaduan cireng salju yang renyah di luar dan kenyal di dalam, disiram kuah keju otentik yang super creamy dan gurih."
    },
    "2": {
        id: "2",
        name: "Cireng Salju Kuah Seblak Ayam Suwir",
        category: "fastfood",
        isPromo: true,
        image: "assets/image/produk/Cireng Salju Kuah Seblak Ayam Suwir.jpg",
        description: "Cireng kenyal berendam dalam kuah seblak pedas nendang, lengkap dengan taburan ayam suwir gurih dan segarnya perasan limau."
    },
    "3": {
        id: "3",
        name: "Cireng Isi Ayam Suwir Kuah Keju Creamy",
        category: "fastfood",
        isPromo: true,
        image: "assets/image/produk/Cireng Isi Ayam Suwir Kuah Keju Creamy.jpg",
        description: "Sensasi dobel nikmat! Cireng montok berisi ayam suwir berbumbu, makin mantap diseruput bareng kuah keju lumer yang bikin nagih."
    },
    "4": {
        id: "4",
        name: "Cireng Isi Ayam Suwir Kuah Seblak",
        category: "fastfood",
        isPromo: false,
        image: "assets/image/produk/Cireng Isi Ayam Suwir Kuah Seblak.jpg",
        description: "Cireng isi ayam suwir yang padat, disajikan dengan siraman kuah seblak kental yang pedasnya bikin melek. Jagoannya bikin keringetan!"
    },
    "5": {
        id: "5",
        name: "Frozen Cireng Isi Ayam Suwir",
        category: "frozenfood",
        isPromo: false,
        image: "assets/image/produk/Frozen Cireng Isi Ayam Suwir.jpg",
        description: "Stok camilan andalan di rumah! Tinggal goreng dadakan, nikmati cireng kenyal isian ayam suwir gurih yang fresh kapan aja kamu mau."
    },
    "6": {
        id: "6",
        name: "Frozen Cireng Isi Ayam Suwir Kuah Keju",
        category: "frozenfood",
        isPromo: false,
        image: "assets/image/produk/Frozen Cireng Isi Ayam Suwir Kuah Keju.jpg",
        description: "Bawa pulang sensasi ngeju A'paweh! Paket praktis cireng isi mentah lengkap dengan bumbu kuah keju creamy yang gampang banget diracik sendiri."
    },
    "7": {
        id: "7",
        name: "Frozen Cireng Isi Ayam Suwir Kuah Seblak",
        category: "frozenfood",
        isPromo: false,
        image: "assets/image/produk/Frozen Cireng Isi Ayam Suwir Kuah Seblak.jpg",
        description: "Ngidam seblak tengah malam? Rebus aja paket frozen ini! Dilengkapi bumbu seblak otentik yang pedasnya juara dan cireng isi siap masak."
    }
};

// UNTUK REELS
const rawReels = [
    {
        id: "1",
        title: "Iklan Cireng A'paweh",
        videoSrc: "assets/video/cireng/Iklan.mp4"
    },
    {
        id: "2",
        title: "Cireng Kuah Keju",
        videoSrc: "assets/video/cireng/Cireng Kuah Keju.mp4"
    },
    {
        id: "3",
        title: "Best Seller",
        videoSrc: "assets/video/cireng/Best Seller.mp4"
    },
    {
        id: "4",
        title: "Kebonaki",
        videoSrc: "assets/video/cireng/Kebonaki.mp4"
    },
    {
        id: "5",
        title: "Review Cireng",
        videoSrc: "assets/video/cireng/Review.mp4"
    }
];

function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
}

const productsDatabase = deepFreeze(rawProducts);
const reelsDatabase = deepFreeze(rawReels);