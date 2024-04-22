import Link from 'next/link';

export default function ImageResults({ results }) {
  return (
    <div className="pb-12 mt-4 sm:pb-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-5">
        {results.items.map((result) => {
          return (
            <div className="mb-8" key={result.link}>
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="h-[150px] sm:h-[180px] w-full object-contain aspect-auto bg-[#27282B] rounded-xl group-hover:shadow-custom transition-shadow"
                  />
                  <h2 className="mt-1 text-[12px] text-[#9AA0A6] group-hover:underline truncate">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="text-sm text-[#85B5C6] truncate">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
