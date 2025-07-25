import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-tie-dye bg-cover bg-center animate-pulse-tiedye">
      <NavBar />
      <main className="pt-5 max-w-6xl mx-auto px-4">{children}</main>
    </div>
  );
} 