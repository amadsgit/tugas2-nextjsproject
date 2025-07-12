import NavbarLanding from '@/components/NavbarLanding';
import FooterLanding from '@/components/FooterLanding';
import Image from 'next/image';

export default function TentangPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-white via-emerald-50 to-white text-gray-800">
      {/* Navbar */}
      <NavbarLanding />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-xl shadow-xl mx-4 md:mx-6 mt-6 px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo E-Posyandu"
            width={80}
            height={80}
            className="rounded-full bg-white p-1 shadow-lg ring-2 ring-white"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow">
              Tentang E‑Posyandu Care
            </h1>
            <p className="text-white text-sm md:text-base mt-1">
              Digitalisasi layanan posyandu untuk Indonesia sehat & terdata
            </p>
          </div>
        </div>

        <div className="text-white italic text-sm md:text-base text-center md:text-right space-y-1">
          <p className="font-light">“Melayani dengan data, mengabdi dengan hati.”</p>
          <p className="text-xs tracking-wide">Realtime • Terintegrasi • Mudah digunakan</p>
        </div>
      </section>

      {/* Konten utama */}
      <section className="mt-10 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700">
            Misi Kami
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>E‑Posyandu Care</strong> hadir sebagai solusi digital modern
            yang membantu kader Posyandu dan tenaga medis dalam mencatat,
            mengelola, dan melaporkan data tumbuh kembang anak dan ibu hamil secara mudah, cepat, dan akurat.
          </p>
          <ul className="list-disc ml-6 text-gray-600 text-sm md:text-base space-y-1">
            <li>✅ Mempermudah pencatatan data balita & ibu hamil</li>
            <li>📈 Menyediakan grafik pertumbuhan & status gizi</li>
            <li>📅 Notifikasi jadwal imunisasi & kunjungan Posyandu</li>
            <li>🗂️ Laporan otomatis ke puskesmas & dinas kesehatan</li>
            <li>💬 Media komunikasi antara kader dan masyarakat</li>
          </ul>
        </div>

        {/* Ilustrasi */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero-desktop.png"
            alt="Ilustrasi Posyandu"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Penutup */}
      <section className="mt-16 bg-gray-50 py-10 px-6 md:px-16 text-center rounded-t-3xl shadow-inner">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700">
          Bersama Wujudkan Posyandu Digital
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Dengan <strong>E‑Posyandu Care</strong>, kita bantu kader, tenaga kesehatan, dan warga
          agar dapat menjangkau layanan kesehatan lebih mudah, transparan, dan terstruktur.
          Saatnya Posyandu naik kelas ke era digital!
        </p>
      </section>

      {/* Footer */}
      <FooterLanding />
    </main>
  );
}
