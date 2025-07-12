// app/(dashboard)/dashboard/balita/[id]/page.tsx
import { notFound } from 'next/navigation';

const dummyBalita = [
  { id: '1', nama: 'Ayu Lestari', umur: '2 tahun', berat: '12 kg', tinggi: '85 cm' },
  { id: '2', nama: 'Rafi Pratama', umur: '1 tahun 8 bulan', berat: '10.5 kg', tinggi: '78 cm' },
  { id: '3', nama: 'Zahra Amelia', umur: '3 tahun', berat: '13.2 kg', tinggi: '90 cm' },
];


export async function generateStaticParams(): Promise<{ id: string }[]> {
  return dummyBalita.map((balita) => ({ id: balita.id }));
}


export default function DetailBalitaPage({
  params,
}: {
  params: { id: string };
}) {
  const balita = dummyBalita.find((item) => item.id === params.id);

  if (!balita) notFound();

  return (
    <div className="p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-bold text-emerald-600 mb-4">Detail Data Balita</h1>
      <div className="rounded-md shadow p-6 space-y-4 border">
        <p><strong>Nama:</strong> {balita.nama}</p>
        <p><strong>Umur:</strong> {balita.umur}</p>
        <p><strong>Berat Badan:</strong> {balita.berat}</p>
        <p><strong>Tinggi Badan:</strong> {balita.tinggi}</p>
      </div>
    </div>
  );
}
