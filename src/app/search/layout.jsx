import Header from '@/components/search/Header';
import Footer from '@/components/search/Footer';
import './../globals.css';

export default function layout({ children }) {
  return (
    <div className="bg-dark-gray">
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
