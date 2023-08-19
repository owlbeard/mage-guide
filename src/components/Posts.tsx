import Link from 'next/link';
import React from 'react';

export default function Posts() {
  return (
    <section className="flex-grow">
      <div className="bg-black p-4 bg-opacity-70 flex flex-col gap-4 items-start">
        <h2 className="text-3xl font-bold">ESSENTIAL MAGE MACROS</h2>
        <p className="text-2xl">
          Here are some of the macros I'm using whether I'm in arenas or bgs, or
          in my usual farming spot. 😎
        </p>
        <p className="text-2xl">A simple focus mouseover macro:</p>
        <p className="whitespace-pre-wrap bg-black w-52 p-4 border-dashed border">
          {'#showtooltip Cold Snap\n/focus mouseover'}
        </p>
        <button className="text-xl p-4 bg-blue-400">Read more</button>
        <div>
          <p>
            Category:{' '}
            <Link className="text-blue-400" href={'/mage-macros'}>
              Mage Macros
            </Link>
          </p>
          <p>
            Tags:{' '}
            <Link className="text-blue-400" href={'/mage-macros'}>
              Macros
            </Link>
            ,
            <Link className="text-blue-400" href={'/mage-macros'}>
              PvP
            </Link>
            ,{' '}
            <Link className="text-blue-400" href={'/mage-macros'}>
              Duels
            </Link>
          </p>
          <p className="text-blue-400">5 Comments</p>
        </div>
      </div>
    </section>
  );
}
