'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Tooltips from '../Tooltips';
import Spinner from '../Spinner';
import { SearchIcon, XIcon } from '@heroicons/react/outline';

export default function Input() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setLoading(true);
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?lang=es'
    )
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-[95%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-custom focus-within:shadow-full focus-within:bg-light-gray transition-shadow sm:max-w-xl xl:max-w-2xl"
      >
        <SearchIcon className="w-5 h-5 mr-3 text-gray-200" />
        <input
          type="text"
          className="w-full focus:outline-none text-white bg-transparent text-[16px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <div className="sm:border-r sm:border-gray-300">
            <XIcon
              className="w-5 h-5 text-gray-200 cursor-pointer mr-0 sm:mr-3"
              onClick={() => setInput('')}
            />
          </div>
        )}
        <Tooltips />
      </form>
      <div className="flex items-center justify-center bg-transparent mt-8 space-x-4 sm:space-y-0">
        <button
          onClick={handleSubmit}
          className="h-10 w-36 bg-light-gray rounded-md text-sm text-gray-100 hover:ring-gray-900 hover:border hover:border-gray-500 focus:outline-none active:ring-gray-300 hover:shadow-md sm:w-40 transition-shadow"
        >
          Buscar en la web
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className="h-10 w-36 bg-light-gray rounded-md text-sm text-gray-100 hover:ring-gray-900 hover:border hover:border-gray-500 focus:outline-none active:ring-gray-300 hover:shadow-md sm:w-40 transition-shadow disabled:opacity-80"
        >
          {loading ? <Spinner /> : ' Búsqueda aleatoria'}
        </button>
      </div>
    </>
  );
}
