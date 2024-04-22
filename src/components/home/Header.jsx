'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import GoogleProductsMenu from '../GoogleProductsMenu';
import UserLocation from '../UserLocation';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { LocationMarkerIcon } from '@heroicons/react/outline';

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const closeMenu = () => setOpen(false);
  useOnClickOutside(ref, closeMenu);
  return (
    <header className="flex items-center justify-between text-sm text-white py-6">
      <div className="flex flex-row">
        <LocationMarkerIcon className="text-gray-200 h-5 w-5" />
        <UserLocation textStyles="font-semibold ml-1" />
      </div>
      <nav className="flex items-center justify-end space-x-2 sm:space-x-4">
        <div className="hidden space-x-2 sm:block sm:space-x-4">
          <Link href={'/'} className="hover:underline">
            Gmail
          </Link>
          <Link href={'/'} className="hover:underline">
            Imágenes
          </Link>
        </div>
        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className="p-2 relative bg-transparent hover:bg-light-gray rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
          {open && <GoogleProductsMenu menuStyles="top-[50px] -right-28" />}
        </div>

        <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 hover:brightness-110 transition duration-300">
          Acceder
        </button>
      </nav>
    </header>
  );
}
