'use client';

import {
  BellIcon,
  UserCircleIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function TopNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-16 bg-white border-b shadow-sm px-4 flex items-center justify-between sticky top-0 z-40">
      {/* Kiri: Judul */}
      <div className="text-xl font-semibold text-emerald-600">
        e-Posyandu
      </div>

      {/* Kanan: Notifikasi dan Profil */}
      <div className="flex items-center space-x-4">
        {/* Notifikasi */}
        <button className="relative text-gray-600 hover:text-emerald-600 transition">
          <BellIcon className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profil */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-full hover:opacity-80 transition"
          >
            <Image
              src="/favicon.ico"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Aduhh..
            </span>
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 overflow-hidden">
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserCircleIcon className="w-5 h-5 text-blue-500" />
                Profil
              </Link>
              <form action="/">
                <button
                  type="submit"
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <PowerIcon className="w-5 h-5 text-red-500" />
                  Keluar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
