'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log('error', error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h1 className="mb-4 text-lg text-white">Algo salió mal...</h1>
      <p className="text-sky-500 font-medium">Intente nuevamente</p>
    </div>
  );
}
