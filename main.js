// Memastikan semua elemen DOM siap dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVIGASI MOBILE LOGIC ---
    const tombolMenu = document.getElementById('tombol-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const tautanMobile = document.querySelectorAll('#menu-mobile a');

    if (tombolMenu && menuMobile) {
        // Buka / Tutup Menu Mobile saat tombol diklik
        tombolMenu.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });

        // Tutup Menu Mobile otomatis saat salah satu link navigasi diklik
        tautanMobile.forEach(link => {
            link.addEventListener('click', () => {
                menuMobile.classList.add('hidden');
            });
        });
    }

    // --- FILTER PORTOFOLIO LOGIC ---
    const tombolFilterSemua = document.getElementById('filter-semua');
    const tombolFilterWeb = document.getElementById('filter-web');
    const tombolFilterUiux = document.getElementById('filter-uiux');
    const semuaTombolFilter = document.querySelectorAll('.tombol-kategori');
    const itemsProyek = document.querySelectorAll('.item-proyek');

    // Fungsi utama untuk menyaring kategori proyek
    function saringProyek(kategori, tombolAktif) {
        // Ganti status kelas visual pada tombol yang aktif
        semuaTombolFilter.forEach(t => {
            t.classList.remove('bg-rimba-700', 'text-white', 'shadow-md');
            t.classList.add('bg-rimba-50', 'text-rimba-900', 'shadow-sm');
        });

        tombolAktif.classList.remove('bg-rimba-50', 'text-rimba-900', 'shadow-sm');
        tombolAktif.classList.add('bg-rimba-700', 'text-white', 'shadow-md');

        // Sembunyikan atau tampilkan item kartu proyek sesuai kategori
        itemsProyek.forEach(item => {
            const kategoriItem = item.getAttribute('data-kategori');
            if (kategori === 'semua' || kategoriItem === kategori) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Pasang Event Listener ke masing-masing tombol filter jika elemennya tersedia
    if (tombolFilterSemua) {
        tombolFilterSemua.addEventListener('click', (e) => saringProyek('semua', e.currentTarget));
    }
    if (tombolFilterWeb) {
        tombolFilterWeb.addEventListener('click', (e) => saringProyek('web', e.currentTarget));
    }
    if (tombolFilterUiux) {
        tombolFilterUiux.addEventListener('click', (e) => saringProyek('uiux', e.currentTarget));
    }

    // --- FORM KONTAK LOGIC ---
    const formPesan = document.getElementById('form-pesan');
    const notifikasiBerhasil = document.getElementById('notifikasi-berhasil');

    if (formPesan && notifikasiBerhasil) {
        formPesan.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah halaman reload otomatis
            
            // Mengosongkan isian form setelah disubmit
            formPesan.reset();
            
            // Menampilkan notifikasi sukses kirim pesan
            notifikasiBerhasil.classList.remove('hidden');
            
            // Menyembunyikan notifikasi kembali setelah 5 detik
            setTimeout(() => {
                notifikasiBerhasil.classList.add('hidden');
            }, 5000);
        });
    }
});
