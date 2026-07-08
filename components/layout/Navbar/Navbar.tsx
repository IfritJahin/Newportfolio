'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type NavProps = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items: NavProps[] = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
        {/* <nav
          className="
          hidden md:flex
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50
          rounded-full
          shadow-md
          h-[70px]
          px-8
          w-[95%]
          md:max-w-[900px]
          lg:max-w-[1100px]
          xl:max-w-[1384px]
          2xl:max-w-[1775px]
          navbar
          "
          > */}
      <nav
        className="
          navbar
          hidden 
          md:flex
          rounded-full
          shadow-md
          h-[70px]
          mt-5
          px-8
          w-[95%]
          md:max-w-[900px]
          lg:max-w-[1100px]
          xl:max-w-[1384px]
          2xl:max-w-[1775px]
          mx-auto
        "
          >
        <div className="flex items-center justify-between w-full md:ml-10 xl:ml-20 2xl:ml-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10 mr-10 xl:mr-20 2xl:mr-[85px]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#873481] hover:font-bold transition-colors font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= Mobile Navbar ================= */}
      <nav
        className={`
          navbar
          md:hidden
          mx-auto
          mt-5
          shadow-md
          w-[90%]
          px-5
          ${open ? 'rounded-3xl py-5' : 'rounded-full py-4'}
        `}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
            />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height] duration-300 ${
            open ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="border-t border-zinc-300 pt-4 flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-center text-lg hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;