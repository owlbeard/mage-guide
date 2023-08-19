import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <main className="relative flex flex-col items-start justify-center bg-black bg-opacity-70 w-full">
      <div className="flex">
        <Image src={logo.src} width={100} height={100} alt="logo" />
        <div>
          <h1 className="text-6xl font-extrabold">MAGE GUIDE</h1>
          <p className="text-2xl font-bold">
            Follow my guides, get good at mage!
          </p>
        </div>
      </div>
      <p className="absolute right-0 bottom-0 p-2 text-2xl">EST. 2023</p>
    </main>
  );
}
