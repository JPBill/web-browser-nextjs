'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  return (
    <div className="flex items-center text-[#bdc1c6] text-sm pb-4">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex items-center bg-[#303134] rounded-full hover:brightness-125 pr-4 p-2">
            <ChevronLeftIcon className="h-5 w-5" />
            Antes
          </div>
        </Link>
      )}
      <div className="h-px flex-1 bg-[#303134]" />
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex items-center bg-[#303134] rounded-full hover:brightness-125 pl-4 p-2">
            Siguiente
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </Link>
      )}
    </div>
  );
}
