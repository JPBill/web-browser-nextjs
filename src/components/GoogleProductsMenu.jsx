import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    imageSrc: '/g-logo.svg',
    url: '/',
    title: 'Búsqueda',
  },
  {
    id: 2,
    imageSrc: '/maps.svg',
    url: 'https://maps.google.com',
    title: 'Maps',
  },
  {
    id: 3,
    imageSrc: '/youtube.svg',
    url: 'https://www.youtube.com/',
    title: 'YouTube',
  },
  {
    id: 4,
    imageSrc: '/play.svg',
    url: 'https://play.google.com',
    title: 'Play',
  },
  {
    id: 5,
    imageSrc: '/news.svg',
    url: 'https://news.google.com',
    title: 'Noticias',
  },
  {
    id: 6,
    imageSrc: '/gmail.svg',
    url: 'https://mail.google.com',
    title: 'Gmail',
  },

  {
    id: 7,
    imageSrc: '/drive.svg',
    url: 'https://drive.google.com',
    title: 'Drive',
  },
  {
    id: 8,
    imageSrc: '/photos.svg',
    url: 'https://image.google.com',
    title: 'Fotos',
  },
  {
    id: 9,
    imageSrc: '/calendar.svg',
    url: 'https://calendar.google.com',
    title: 'Calendario',
  },
];

export default function GoogleProductsMenu({ menuStyles }) {
  return (
    <div
      className={`absolute z-20 mx-auto border-light-gray bg-light-gray border-[14px] rounded-[40px] h-[450px] w-[300px] ${menuStyles}`}
    >
      <div className="rounded-[32px] overflow-hidden w-[272px] h-[350px] bg-[#171717] py-6 px-4">
        <div className="grid grid-cols-3 space-x-2">
          {products.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-transparent hover:bg-light-gray cursor-pointer"
            >
              <Image
                src={item.imageSrc}
                width={40}
                height={40}
                alt={item.id}
                className="aspect-square"
                style={{ height: 'auto' }}
              />
              <span className="mt-3 text-[12px] text-white">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={'https://about.google/products/'}
        className="absolute inset-x-0 bottom-3 mx-auto w-[80%] py-2 text-center bg-light-gray text-sky-500 border border-gray-400 text-sm font-semibold rounded-full hover:brightness-125 transition duration-300"
      >
        Más productos de Google
      </Link>
    </div>
  );
}
