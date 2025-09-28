document.addEventListener('DOMContentLoaded', function() {
    // Efek header saat di-scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Logika untuk carousel gambar transparan di Hero Section
    const carouselContainer = document.getElementById('hero-image-carousel');
    if (carouselContainer) {
        // GANTI DAFTAR GAMBAR INI DENGAN NAMA FILE PNG TRANSPARAN ASLI
        const images = [
            'img/home/500/barbershop.png',
            'img/home/500/Clothing.png',
            'img/home/500/food_truck.png',
            'img/home/500/jualan_buah.png',
            'img/home/500/nasi_kapau.png',
            'img/home/500/warung_kelontong.png',
            'img/home/500/Ayam Goreng Keju.png',
            //'img/home/500/ayam_keju.png' // Pastikan extensionnya .png
        ];
        
        let currentIndex = 0;

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) {
                img.classList.add('active');
            }
            carouselContainer.appendChild(img);
        });

        const carouselImages = carouselContainer.querySelectorAll('img');

        if (carouselImages.length > 1) {
            setInterval(() => {
                carouselImages[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % carouselImages.length;
                carouselImages[currentIndex].classList.add('active');
            }, 2000); // Ganti gambar setiap 2 detik (2000 milidetik)
        }
    }
});