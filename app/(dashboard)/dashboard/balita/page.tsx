
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';

const dummyBalita = [
  { id: '1', nama: 'Ayu Lestari' },
  { id: '2', nama: 'Rafi Pratama' },
  { id: '3', nama: 'Zahra Amelia' },
];

export default function BalitaPage() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-semibold text-emerald-700 mb-6">Data Balita</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow">
          <thead className="bg-emerald-100 text-emerald-700">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama Balita</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyBalita.map((balita, index) => (
              <tr key={balita.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{balita.nama}</td>
                <td className="px-4 py-2">
                  <Link
                    href={`/dashboard/balita/${balita.id}`}
                    className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-1.5 text-sm hover:bg-emerald-500 transition"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
