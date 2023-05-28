export default [
    {
        path: '/artikel',
        name: 'Halaman Artikel',
        component: ()=>import('@/views/content/artikel/IndexArtikel.vue')
    },
    {
        path: '/artikel/:slug',
        name: 'Isi Artikel',
        component: ()=>import('@/views/content/artikel/ArtikelBySlug.vue')
    },
    {
        path: '/download-app',
        name: 'Download App',
        component: ()=>import('@/views/content/download-page/IndexDownload.vue')
    },
    {
        path: '/riwayat',
        name: 'Riwayat Konsumen',
        component: ()=>import('@/views/content/riwayat/IndexRiwayat.vue')
    },
    {
        path: '/chat-dokter/',
        component: () => import('@/views/content/dokter/IndexDokter.vue'),
        children: [
            {
                path: '',
                redirect: 'dokter',
            },
            {
                path: 'dokter',
                component: () => import('@/views/content/dokter/SpesialisDokter.vue'),
            },
            {
                path: 'dokter/:id',
                name: 'Detail Dokter',
                component: () => import('@/views/content/dokter/DetailDokter.vue'),
            },
        ],
    },

    {
        path: '/toko-kesehatan',
        name: 'Toko Kesehatan',
        component: () => import('@/views/content/obat-produk/IndexShop.vue')
    },
    {
        path: '/toko-kesehatan/detail-medicine/:id',
        name: 'Detail Medicine',
        component: () => import('@/views/content/obat-produk/DetailMedicine.vue')
    },
    {
        path: '/hospital',
        name: "Rumah Sakit Terdekat",
        component: () => import('@/views/content/rumah-sakit/IndexHospital.vue')
    },
    {
        path: '/detail_rumah_sakit/:id',
        name: 'Detail Hospital',
        component: () => import('@/views/content/rumah-sakit/DetailHospital.vue'),
    },
    {
        path: '/detail_rumah_sakit/:idPenyakit/:id',
        name: 'Detail Spesialis Rs',
        component: () => import('@/views/content/rumah-sakit/DetailSpesialisRs.vue'),
    },
    {
        path: '/reservasi-perawat',
        name: 'Reservasi Perawat',
        component: () => import('@/views/content/perawat/IndexPerawat.vue')
    },
    {
        path: '/produk_kategori/:id',
        name: 'Kategori Produk',
        component: () => import('@/views/content/obat-produk/KategoriProduk.vue')
    },
    {
        path: '/produk-obat',
        name: 'Apotek Terdekat',
        component: () => import('@/views/content/apotek/IndexApotek.vue')
    },
    {
        path: '/produk-obat/:id',
        name: 'Detail Produk',
        component: () => import('@/views/content/apotek/DetailProduk.vue')
    },
    {
        path: '/produk-obat/apotek/:id',
        name: 'Produk Apotek',
        component: () => import('@/views/content/apotek/IndexObatApotek.vue')
    },
    {
        path: '/test_ongkir',
        component: () => import('@/views/content/test-ongkir/IndexOngkir.vue')
    },
    {
        path: '/keranjang',
        component: () => import('@/views/content/checkout-page/IndexCheckout.vue')
    }
]