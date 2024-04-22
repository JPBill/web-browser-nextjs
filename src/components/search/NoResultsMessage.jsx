import { ExclamationCircleIcon } from '@heroicons/react/outline';

export default function NoResultsMessage({ searchTerm }) {
  return (
    <div className="flex justify-start items-center mt-10 pl-0 lg:pl-40 ">
      <ExclamationCircleIcon className="hidden text-white h-16 w-16 sm:block" />
      <div className="sm:ml-6">
        <div className="sm:border-l sm:border-light-gray sm:pl-6">
          <h1 className="font-medium text-white tracking-tight">
            No se han encontrado resultados para {searchTerm}
          </h1>
          <p className="mt-4 mb-2 text-gray-200">Sugerencias:</p>
          <ul className="list-disc text-gray-200 ml-4 sm:ml-6">
            <li>
              Asegúrate de que todas las palabras estén escritas correctamente.
            </li>
            <li>Prueba diferentes palabras clave.</li>
            <li>Prueba palabras clave más generales.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
