import Header from '@/components/search/Header';
import './../globals.css';

export default function layout({ children }) {
  return (
    <div className="bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Header />
        {children}
      </div>
    </div>
  );
}
