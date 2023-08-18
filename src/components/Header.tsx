import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex">
        <Image src={logo.src} width={100} height={100} alt="logo" />
        <div>
          <h1 className="text-6xl font-extrabold">MAGE GUIDE</h1>
          <p className="text-2xl font-bold">
            Follow my guides, get good at mage!
          </p>
        </div>
      </div>
    </main>
  );
}
