'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// Components
import NavbarMobile from './NavbarMobile';

// Navbar links here
type NavbarLink = {
  id: number;
  title: string;
  url: string;
};

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Services',
    url: '/services',    
  },
  {
    id: 4,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 5,
    title: 'Pricing',
    url: '/pricing',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
  },
];
import React from 'react';

export default function Navbar() {
  // Active link for current page
  const pathname = usePathname();
  // Navbar visibility
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Hide Navbar on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollPosition && navbarVisible) {
        setNavbarVisible(false);
      }
      if (currentScrollY < prevScrollPosition && !navbarVisible) {
        setNavbarVisible(true);
      }
      setPrevScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarVisible, prevScrollPosition]);

  return (
    <nav
      className={`fixed top-[0] left-[0] right-[0] flex items-center bg-slate-800 shadow-md [transition:all_0.8s_ease-in-out] h-[70px] border-b border-gray-100 ${
        navbarVisible
          ? 'translate-y-0 visible  '
          : 'translate-y-[-100px] invisible'
      }`}
    >
      <div className="container">
        {/* Content */}
        <div className="flex justify-between items-center">
          {/* Logo start */}
          <div className="flex items-center gap-2">
            <Link className="leading-[0]" href="/">
              <Image
                className="lg:w-13 lg:h-13 md:w-10 md:h-10 w-9 h-9 "
                src="/images/logo.svg"
                width={55}
                height={55}
                alt="logo"
              />
            </Link>
            <div className="xl:text-3xl md:text-2xl text-prim-clr text-xl font-semibold flex gap-[10px]">
              Next.js 14 - Tailwind
            </div>
          </div>
          {/* Logo end */}
          {/* Menu with dropdown start */}
          <ul className="lg:flex hidden gap-5 items-center">
            {navbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  
                    <Link
                      className={`text-[17px] font-medium text-white hover:text-hover transition-all ${
                        pathname == link.url ? '!text-hover' : ''
                      } `}
                      href={link.url}
                    >
                      {link.title}
                    </Link>
                  
                </li>
              );
            })}
          </ul>
          {/* Menu with dropdown end */}
          {/* Button right */}
          <Link className="btn-main lg:block hidden" href="/contact">
            Get A Quote
          </Link>
          {/* Navbar mobile */}
          <NavbarMobile />
        </div>
        {/* content end */}
      </div>
    </nav>
  );
}
