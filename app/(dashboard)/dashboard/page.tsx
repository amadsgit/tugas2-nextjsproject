import {
  UsersIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className=" p-6 bg-gradient-to-b from-white to-white text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
        Dashboard E‑Posyandu Care
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang, berikut ringkasan informasi Posyandu hari ini.
      </p>

      {/* Ringkasan Info Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <SummaryCard
          title="Data Balita"
          count="null"
          icon={<UsersIcon className="w-8 h-8 text-emerald-500" />}
        />
        <SummaryCard
          title="Ibu Hamil Terdata"
          count="null"
          icon={<ClipboardDocumentListIcon className="w-8 h-8 text-emerald-500" />}
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
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="bg-emerald-100 p-3 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-emerald-700">{count}</p>
      </div>
    </div>
  );
}
