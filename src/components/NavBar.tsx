"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';

const navLinks = [
  { href: '/wisdom', label: 'Wisdom' },
  { href: '/night-club', label: 'Night Club' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 w-full bg-tie-dye bg-cover bg-center shadow-lg animate-pulse-tiedye">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Peace sign logo */}
        <Link href="/" aria-label="Peace & Love Home" className="flex items-center gap-2">
          <span className="text-3xl" role="img" aria-label="Peace Sign">☮️</span>
          <span className="font-heading text-xl md:text-2xl tracking-widest text-tie-dye-purple drop-shadow">Peace & Love</span>
        </Link>
        <ul className="flex gap-4 md:gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`font-heading text-lg md:text-xl px-2 py-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-tie-dye-pink ${isActive ? 'text-tie-dye-pink' : 'text-tie-dye-purple'}`}
                  tabIndex={0}
                >
                  {label}
                  <motion.span
                    layoutId="rainbow-underline"
                    className="absolute left-0 right-0 -bottom-1 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #FF6F91, #FFB86F, #A259F7, #6EC6FF, #FFE156)',
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                  <span className="sr-only">{isActive ? ' (current page)' : ''}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
} 