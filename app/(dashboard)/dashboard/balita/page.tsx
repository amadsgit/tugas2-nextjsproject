// app/(dashboard)/dashboard/balita/page.tsx
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';

const dummyBalita = [
  { id: '1', nama: 'Ayu Lestari' },
  { id: '2', nama: 'Rafi Pratama' },
  { id: '3', nama: 'Zahra Amelia' },
];

export default function BalitaPage() {
  return (
    <div className="p-6 bg-gradient-to-b from-emerald-50 via-white to-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-emerald-600">🧒 Data Balita</h1>

        {/* Tabel */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-emerald-100 text-emerald-700">
              <tr>
                <th className="px-5 py-3 font-semibold">No</th>
                <th className="px-5 py-3 font-semibold">Nama Balita</th>
                <th className="px-5 py-3 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {dummyBalita.map((balita, index) => (
                <tr key={balita.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">{index + 1}</td>
                  <td className="px-5 py-3 font-medium text-gray-900">{balita.nama}</td>
                  <td className="px-5 py-3">
                    <Link
                      href={`/dashboard/balita/${balita.id}`}
                      className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-1.5 hover:bg-emerald-500 transition"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
              {dummyBalita.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-5 py-6 text-center text-gray-500">
                    Tidak ada data balita tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
