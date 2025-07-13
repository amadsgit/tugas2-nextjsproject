// app/(dashboard)/dashboard/balita/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const dummyBalita = [
  { id: '1', nama: 'Ayu Lestari', umur: '2 tahun', berat: '12 kg', tinggi: '85 cm' },
  { id: '2', nama: 'Rafi Pratama', umur: '1 tahun 8 bulan', berat: '10.5 kg', tinggi: '78 cm' },
  { id: '3', nama: 'Zahra Amelia', umur: '3 tahun', berat: '13.2 kg', tinggi: '90 cm' },
];

export async function generateStaticParams() {
  return dummyBalita.map((balita) => ({
    id: balita.id,
  }));
}

export default function DetailBalitaPage({ params }: { params: { id: string } }) {
  const balita = dummyBalita.find((b) => b.id === params.id);

  if (!balita) return notFound();

  return (
    <div className="p-6 bg-gradient-to-b from-emerald-50 via-white to-white text-gray-800">
      {/* Header */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-600">
            🧒 Detail Data Balita
          </h1>
          <Link
            href="/dashboard/balita"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-600 hover:bg-emerald-600 hover:text-white rounded-md transition"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Kembali
          </Link>
          
        </div>

        {/* Kartu Detail */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl font-bold">
              {balita.nama.charAt(0)}
            </div>
            <div>
              <p className="text-lg font-semibold">{balita.nama}</p>
              <p className="text-sm text-gray-500">ID Balita: #{balita.id}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">🎂 Umur</p>
              <p className="font-medium">{balita.umur}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">⚖️ Berat Badan</p>
              <p className="font-medium">{balita.berat}</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">📏 Tinggi Badan</p>
              <p className="font-medium">{balita.tinggi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
