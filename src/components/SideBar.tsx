import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sponsor from '../../public/sponsor.png';

export default function SideBar() {
  return (
    <main className="flex flex-col gap-8">
      <section className="flex flex-col">
        <button className="bg-purple-600 p-2 text-2xl">Forums</button>
        <button className="bg-red-600 p-2 text-2xl">Mage Macros</button>
        <button className="bg-blue-600 p-2 text-2xl">
          AoE Farm Spots & Info
        </button>
      </section>
      <section className="flex flex-col gap-4 p-4 bg-black bg-opacity-70">
        <h2 className="text-2xl">RECENT COMMENTS</h2>
        <p className="text-xl">
          Aeias on{' '}
          <Link className="underline text-blue-400" href={'/mage-macros'}>
            Mage Macros
          </Link>
        </p>
        <p className="text-xl">
          Xaryu on{' '}
          <Link className="underline text-blue-400" href={'/duelling-tips'}>
            Duelling Tips
          </Link>
        </p>
        <p className="text-xl">
          Venruki on{' '}
          <Link className="underline text-blue-400" href={'/arena-comps'}>
            Arena Comps
          </Link>
        </p>
      </section>
      <section className="flex flex-col gap-4 p-4 bg-black bg-opacity-70">
        <h2 className="text-2xl">RECENT POSTS</h2>
        <Link className="text-xl underline text-blue-400" href={'/mage-macros'}>
          Mage Macros
        </Link>
        <Link
          className="text-xl underline text-blue-400"
          href={'/duelling-tips'}
        >
          Duelling Tips
        </Link>
        <Link className="text-xl underline text-blue-400" href={'/arena-comps'}>
          Arena Comps
        </Link>
      </section>
      <section className="flex flex-col gap-4 p-4 bg-black bg-opacity-70">
        <h2 className="text-2xl">CATEGORIES</h2>
        <select
          name="category"
          id="category"
          defaultValue={'Select a Category'}
          className="bg-black text-white p-2 text-xl"
        >
          <option className="bg-black text-white text-xl" value="Cataclysm">
            Cataclysm
          </option>
          <option className="bg-black text-white text-xl" value="Mage Macros">
            Mage Macros
          </option>
          <option className="bg-black text-white text-xl" value="Duelling Tips">
            Duelling Tips
          </option>
          <option className="bg-black text-white text-xl" value="Arena Comps">
            Arena Comps
          </option>
        </select>
      </section>
      <section className="flex flex-col gap-4 p-4 bg-black bg-opacity-70">
        <h2 className="text-2xl">SPONSORED LINKS</h2>
        <Image alt="Sponsor" height={124} width={300} src={sponsor.src} />
      </section>
    </main>
  );
}
