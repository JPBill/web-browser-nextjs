export default function loading() {
  return (
    <div className="pb-12 mt-4 sm:pb-24">
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-0 sm:px-4 gap-x-3 sm:gap-x-5">
        {[...Array(10).keys()].map((i) => (
          <li
            key={i}
            className="animate-pulse pb-6"
            style={{
              animationDelay: `${i * 0.05}s`,
              animationDuration: '1s',
            }}
          >
            <span className="inline-block bg-[#27282B] h-[150px] sm:h-[180px] w-full rounded-xl" />
            <span className="inline-block bg-light-gray h-2 w-full rounded-md" />
            <span className="inline-block bg-light-gray h-2 w-[50%] rounded-md" />
          </li>
        ))}
      </ul>
    </div>
  );
}
