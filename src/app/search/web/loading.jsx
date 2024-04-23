export default function loading() {
  return (
    <div className="max-w-xl sm:max-w-2xl w-full pb-12 pl-0 sm:pb-24 lg:pl-32">
      <div className="my-4">
        <span className="inline-block bg-light-gray w-full h-3 animate-pulse rounded-md" />
      </div>
      <ul className="space-y-10">
        {[...Array(10).keys()].map((i) => (
          <li
            key={i}
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.05}s`,
              animationDuration: '1s',
            }}
          >
            <span className="inline-block bg-light-gray h-3 w-full max-w-sm rounded-md mb-1" />
            <span className="inline-block bg-light-gray h-4 w-full rounded-md mb-1" />
            <span className="inline-block bg-light-gray h-6 w-full rounded-md" />
          </li>
        ))}
      </ul>
    </div>
  );
}
