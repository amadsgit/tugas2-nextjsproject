import {
  UsersIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className=" p-6 bg-gradient-to-b from-emerald-50 via-white to-white text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        Dashboard <span className="text-emerald-500">E‑Posyandu Care</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang, berikut ringkasan informasi Posyandu hari ini.
      </p>

      {/* Ringkasan Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Data Balita"
          count="128"
          icon={<UsersIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Ibu Hamil Terdata"
          count="34"
          icon={<ClipboardDocumentListIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jadwal Posyandu"
          count="5"
          icon={<CalendarDaysIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Laporan Pemeriksaan"
          count="16"
          icon={<DocumentTextIcon className="w-7 h-7 text-emerald-600" />}
        />
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  count,
  icon,
}: {
  title: string;
  count: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
      <div className="bg-emerald-100 p-3 rounded-full ring-2 ring-emerald-300">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-emerald-700">{count}</p>
      </div>
    </div>
  );
}
