'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Links import from Navbar.tsx
import { navbarLinks } from '../NavbarDropdown';

import React from 'react';

export default function NavbarDropdownMobile() {
  // For active link
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // function close menu on press escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav className="relative lg:hidden block z-[999]">
      <div className="">
        <button
          aria-label="Navbar mobile toggle button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-0 bg-transparent"
        >
          <Image
            src="/images/navbar/menu-mobile.svg"
            width={40}
            height={40}
            alt="menu"
            className="md:w-[40px] md:h-[40px] w-[35px] h-[35px]"
          />
        </button>
      </div>

      <div
        className={`fixed invisible translate-x-full top-[0] right-[0] z-50 [transition:all_0.3s_ease-in-out] ${
          isOpen ? '!visible !translate-x-[0]' : ''
        }`}
      >
        <ul className="bg-slate-600 [box-shadow:0_0_10px_rgba(0,_0,_0,_0.2)] w-[300px] h-screen flex gap-[15px] flex-col pt-[50px] pl-[15px] [transition:all_0.5s_ease-in-out]">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                className="md:w-[50px] md:h-[50px] w-[45px] h-[45px]"
                src="/images/logo.svg"
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
          </div>
          {/* Menu links */}
          {navbarLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  className={`text-[17px] font-medium text-white hover:text-hover transition-all ${
                    pathname == link.url ? '!text-hover' : ''
                  } `}
                  href={link.url}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
