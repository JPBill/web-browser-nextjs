import { LocationMarkerIcon } from '@heroicons/react/outline';
import UserLocation from '../UserLocation';

const footerLinks = [
  'Sobre Google',
  'Publicidad',
  'Negocios',
  'Privacidad',
  'Condiciones',
  'Configuración',
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-1 px-4 bg-[#171717] text-gray-200 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="py-3 flex items-center justify-center sm:justify-start sm:border-b sm:border-light-gray">
          <LocationMarkerIcon className="h-4 w-4" />
          <UserLocation showCity={true} textStyles="font-medium text-sm ml-1" />
        </div>
        <div className="hidden text-[12px] sm:flex sm:flex-row sm:justify-between sm:items-center sm:py-3">
          <ul className="flex items-center space-x-6">
            {footerLinks.slice(0, 3).map((item) => {
              return (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center space-x-6">
            {footerLinks.slice(3, 6).map((item) => {
              return (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
