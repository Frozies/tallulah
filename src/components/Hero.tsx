// components/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CatHeadSVG from "./cat";
import React from "react"; // adjust path as needed

export default function Hero() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-tie-dye bg-cover bg-center animate-pulse-tiedye relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-10 z-10">
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.05 }}
                    className="cursor-pointer"
                >
                    <CatHeadSVG />
                </motion.div>

                <h1 className="font-heading text-5xl md:text-6xl text-tie-dye-purple text-center drop-shadow-lg mb-2">
                    Peace & Paws
                </h1>

                <Link href="/wisdom">
                    <motion.p
                        whileHover={{
                            scale: 1.08,
                            rotate: [0, 3, -3, 0],
                            boxShadow: "0 0 16px 4px #FF6F91",
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-4 px-10 py-4 rounded-full font-heading text-2xl text-white shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-tie-dye-purple animate-wiggle"
                        style={{
                            background:
                                "linear-gradient(#FF6F91, #FF6F91) padding-box, linear-gradient(90deg, #FF6F91, #FFB86F, #A259F7, #6EC6FF, #FFE156) border-box",
                            border: "4px solid transparent",
                        }}
                        tabIndex={0}
                        aria-label="Enter the Groove"
                    >
                        Enter the Groove
                    </motion.p>
                </Link>
            </div>
            <footer className="text-center py-4 text-pink-200 font-medium text-sm">
                Made with ❤️ for Tallulah
            </footer>
        </div>
    );
}
