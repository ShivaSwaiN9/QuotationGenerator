import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <section className="w-full h-16 bg-gradient-to-r from-slate-900 to-indigo-600 flex justify-end items-center">
      <div className='px-8'>
        <button
          className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          onClick={() => {
            router.push(`/login`);
          }}
        >
          Logged in 
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
          ></span>
          <span
            className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
          ></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Logout!
          </span>
        </button>
      </div>
    </section>
  );
}
