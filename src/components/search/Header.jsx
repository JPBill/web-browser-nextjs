'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import GoogleProductsMenu from '../GoogleProductsMenu';
import Input from './Input';
import Tabs from './Tabs';

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const closeMenu = () => setOpen(false);

  useOnClickOutside(ref, closeMenu);
  return (
    <header className="pt-6">
      <div className="flex flex-col justify-center w-full space-x-0 space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
        <Link href={'/'} className="mx-auto">
          <Image
            src="/google-white-logo.png"
            width={100}
            height={30}
            className="object-contain"
            alt="Google"
            priority
          />
        </Link>
        <div className="flex-1 pl-0 sm:pl-10">
          <Input />
        </div>
        <div className="hidden space-x-0 sm:inline-flex sm:space-x-2">
          <div
            ref={ref}
            onClick={() => setOpen(!open)}
            className="p-3 relative bg-transparent hover:bg-light-gray rounded-full cursor-pointer"
          >
            <svg
              xmlns="http:www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            {open && (
              <GoogleProductsMenu menuStyles="top-[60px] -right-[110px]" />
            )}
          </div>

          <button className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm bg-sky-500 hover:brightness-110 transition duration-300">
            Acceder
          </button>
        </div>
      </div>
      <Tabs />
    </header>
  );
}
