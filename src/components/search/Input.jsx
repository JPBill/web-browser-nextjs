'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon, XIcon } from '@heroicons/react/outline';
import Tooltips from '../Tooltips';

export default function Input() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full bg-light-gray px-5 py-2.5 rounded-full focus-within:shadow-full transition-shadow sm:max-w-xl lg:max-w-2xl"
    >
      <SearchIcon
        className="w-5 h-5 mr-3 text-gray-200"
        onClick={handleSubmit}
      />
      <input
        type="text"
        className="w-full focus:outline-none text-white bg-transparent text-[16px]"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term ? (
        <XIcon
          className="w-5 h-5 ml-1 text-gray-200 cursor-pointer"
          onClick={() => setTerm('')}
        />
      ) : (
        <Tooltips />
      )}
    </form>
  );
}
