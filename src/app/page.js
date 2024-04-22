import Header from '@/components/home/Header';
import Input from '@/components/home/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-dark-gray">
      <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-10 overflow-hidden">
        <Header />
        <main className="relative">
          <div>
            <div className="absolute inset-0">
              <Image
                src="/google-logo.svg"
                height={500}
                width={700}
                alt="Google"
                className="h-full w-full object-cover filter blur-[40px] hidden sm:block"
              />
            </div>

            <div className="relative py-16 sm:py-24 lg:py-32">
              <div className="flex flex-col items-center space-y-8">
                <Image
                  className="object-contain"
                  src="/g-logo.svg"
                  height={50}
                  width={50}
                  alt="G"
                  priority
                />
                <Input />
              </div>
            </div>
          </div>
        </main>

        <footer className="absolute bottom-0 inset-x-0">
          <div className="space-x-10 py-6 flex flex-row justify-center text-sm text-white dark:text-red-400">
            <Link href={'/'} className="hover:underline">
              Condiciones
            </Link>
            <Link href={'/'} className="hover:underline">
              Privacidad
            </Link>
            <Link href={'/'} className="hover:underline">
              Preferencias
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
