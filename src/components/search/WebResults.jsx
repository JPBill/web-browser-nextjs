import Link from 'next/link';
import Parser from 'html-react-parser';
import Pagination from './Pagination';

export default function WebResults({ results }) {
  return (
    <div className="w-full mx-auto pb-12 pl-0 sm:pb-24 lg:pl-40">
      <p className="my-4 text-[#9AA0A6] text-sm">
        Cerca de {results.searchInformation?.formattedTotalResults} resultados (
        {results.searchInformation?.formattedSearchTime} segundos)
      </p>
      {results.items?.map((result) => {
        return (
          <div className="mb-8 max-w-xl sm:max-w-2xl" key={result.link}>
            <div className="group flex flex-col">
              <Link
                href={result.link}
                className="text-[#85B5C6] text-[12px] truncate mb-1"
              >
                {result.formattedUrl}
              </Link>
              <Link
                href={result.link}
                className="text-lg text-[#8AB4F8] font-medium decoration-[#8AB4F8] mb-1 truncate group-hover:underline"
              >
                {result.title}
              </Link>
            </div>
            <p className="text-[#85B5C6] text-[14px]">
              {Parser(result.htmlSnippet)}
            </p>
          </div>
        );
      })}
      <div className="max-w-xl sm:max-w-2xl">
        <Pagination />
      </div>
    </div>
  );
}
