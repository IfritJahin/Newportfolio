'use client'
import Image from 'next/image';
import React, { useState } from 'react'

type Navprops = {
  name: string;
  href: string;

}
const Navbar = () => {
  const items: Navprops[] = [
    { name: "Skills", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Porfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];
  const [open, setOpen] = useState(false);
  return (
        <nav className="
          navbar
          bg-zinc-100
          rounded-full
          shadow-md
          px-8 py-4
          flex items-center justify-between
          w-[900px]
          sm:w-[400px]
          md:w-[900px]
          xl:w-[1384px]
          2xl:w-[1775px]
          mx-[20px]
          // sm:mx-[20px]
          md:mx-[80px]
          xl:mx-auto
          2xl:mx-auto
          h-[70px]
          mt-10
        ">
        <div className='grid grid-cols-6 items-center w-full'>

          <div className='col-start-1 col-end-3'>
            <Image src="/logo.png" alt="Logo" width={50} height={50} className='ml-20' />
          </div>
          <div className='hidden col-span-2 col-end-7 flex space-x-4 ml-10 2xl:ml-[125px] w-[440px] md:flex gap-4'>
            {items.map((item) => (
              <div key={item.href}>
                <a href={item.href}>{item.name}</a>
              </div>
            ))}
          </div>
          <button className="md:hidden col-start-6 col-end-7" onClick={() => setOpen(!open)}>
            {open ? 'x' : 'Menu'}
          </button>
          {open && (
            <div className='absolute md:col-span-4 md:col-end-7 md:flex md:space-x-4 md:ml-10 md:w-[440px] md:flex gap-4'>
              {items.map((item) => (
                <div key={item.href}>
                  <a href={item.href}>{item.name}</a>
                </div>
              ))}
            </div>
          )}
        </div>
    </nav>
  )
}

export default Navbar