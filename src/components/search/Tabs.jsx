'use client';

import { useState, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const disabledTabs = [
  'Vídeos',
  'Noticias',
  'Shopping',
  'Maps',
  'Vuelos',
  'Libros',
  'Finanzas',
];

export default function Tabs() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchTerm = searchParams.get('searchTerm');

  const closeMenu = () => setOpen(false);

  useOnClickOutside(ref, closeMenu);

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === 'Imágenes' ? 'image' : 'web'}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className="scrollbar-hide flex items-center w-full overflow-x-auto justify-start pt-3 pb-2 pl-0 sm:pt-6 lg:pl-40 space-x-2 select-none border-b border-light-gray lg:justify-start lg:overflow-visible text-[#969BA1] font-semibold text-[10px] uppercase">
      <div
        onClick={() => selectTab('Todo')}
        className={`px-3 py-2 rounded-md bg-transparent cursor-pointer hover:text-white hover:bg-light-gray ${
          pathname === '/search/web' && '!bg-sky-700 !text-white'
        }`}
      >
        <p>Todo</p>
      </div>
      <div
        onClick={() => selectTab('Imágenes')}
        className={`px-3 py-2 rounded-md bg-transparent cursor-pointer hover:text-white hover:bg-light-gray ${
          pathname === '/search/image' && '!bg-sky-700 !text-white'
        }`}
      >
        <p>Imágenes</p>
      </div>

      {disabledTabs.map((item, index) => {
        return (
          <div
            key={item}
            className={`px-3 py-2 rounded-md bg-transparent hover:text-white hover:bg-light-gray cursor-not-allowed ${
              index < 3 ? 'block' : 'block lg:hidden'
            }`}
          >
            {item}
          </div>
        );
      })}

      <div className="pl-0 lg:pl-56 relative">
        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className="hidden lg:flex lg:items-center lg:px-3 lg:py-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
          Más
        </div>
        {open && (
          <div className="absolute top-full -right-6 bg-dark-gray rounded-md z-10">
            <div className="flex flex-col pt-4 pb-1">
              {disabledTabs.slice(3, 7).map((item) => {
                return (
                  <div
                    key={item}
                    className="w-full p-3 cursor-not-allowed bg-transparent hover:bg-light-gray hover:text-white"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
