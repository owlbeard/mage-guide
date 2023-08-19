import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import bg from '../images/bg.jpg';

export const metadata: Metadata = {
  title: 'Mage Guide',
  description: 'Follow my guides, get good at mage!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center max-w-6xl text-white">
          <Header />
          <div className="flex-grow w-full mt-4">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
