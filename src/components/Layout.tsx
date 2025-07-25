import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-tie-dye bg-cover bg-center animate-pulse-tiedye">
            <NavBar />
            <main className="pt-5 max-w-6xl mx-auto px-4 flex-grow">{children}</main>
            <footer className="text-center py-4 text-pink-200 font-medium text-sm">
                Made with ❤️ for Tallulah
            </footer>
        </div>
    );
}
