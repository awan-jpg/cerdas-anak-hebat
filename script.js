// === ANIMASI PEMUATAN ===
let persen = 0;
const bar = document.getElementById('bar-memuat');
const teksPersen = document.getElementById('angka-persen');
const layarPembuka = document.getElementById('layar-pembuka');
const layarBahasa = document.getElementById('layar-bahasa');

const pemuatan = setInterval(() => {
  persen += 5;
  bar.style.width = persen + '%';
  teksPersen.textContent = persen + '%';

  if (persen >= 100) {
    clearInterval(pemuatan);
    setTimeout(() => {
      layarPembuka.classList.remove('aktif');
      layarBahasa.classList.add('aktif');
    }, 800);
  }
}, 150);

// === PILIH BAHASA ===
function pilihBahasa(kode) {
  localStorage.setItem('bahasa', kode);
  const namaBahasa = kode === 'id' ? 'Bahasa Indonesia' : 'English';
  alert('Baik! Menggunakan ' + namaBahasa);
  
  // Nanti: lanjut ke halaman utama
}
