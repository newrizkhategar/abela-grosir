// Mendapatkan semua elemen produk
const productCards = document.querySelectorAll('.product-card');

// Menambahkan event listener untuk setiap produk
productCards.forEach(card => {
    card.addEventListener('click', () => {
        // Menghapus kelas 'selected' dari semua produk terlebih dahulu
        productCards.forEach(item => item.classList.remove('selected'));

        // Menambahkan kelas 'selected' ke produk yang diklik
        card.classList.add('selected');
    });
});
