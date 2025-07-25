"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const navLinks = [
  { href: "/wisdom", label: "Wisdom", emoji: "🌟" },
  { href: "/night-club", label: "Night Club", emoji: "🕺" },
]

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
      <nav className="sticky top-0 z-50 w-full bg-tie-dye bg-cover bg-center shadow-lg animate-pulse-tiedye">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">
          {/* Peace sign logo */}
          <Link href="/" aria-label="Peace & Love Home" className="flex items-center gap-2">
            <motion.span
                className="text-3xl"
                role="img"
                aria-label="Peace Sign"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              ☮️
            </motion.span>
            <span className="font-heading text-xl md:text-2xl tracking-widest text-tie-dye-purple drop-shadow">
            Peace & Love
          </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ href, label, emoji }) => {
              const isActive = pathname === href
              return (
                  <li key={href} className="relative">
                    <Link
                        href={href}
                        className={`font-heading text-xl px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-tie-dye-pink transform hover:scale-105 ${
                            isActive ? "text-white shadow-lg" : "text-tie-dye-purple hover:text-white"
                        }`}
                        style={{
                          background: isActive ? "linear-gradient(45deg, #FF6F91, #FFB86F, #A259F7, #6EC6FF)" : "transparent",
                          backgroundSize: "400% 400%",
                          animation: isActive ? "gradient-shift 3s ease infinite" : "none",
                        }}
                        tabIndex={0}
                    >
                      <span className="mr-2">{emoji}</span>
                      {label}
                      <motion.span
                          layoutId="rainbow-underline"
                          className="absolute left-0 right-0 -bottom-1 h-1 rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #FF6F91, #FFB86F, #A259F7, #6EC6FF, #FFE156)",
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                      <span className="sr-only">{isActive ? " (current page)" : ""}</span>
                    </Link>
                  </li>
              )
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <motion.button
              className="md:hidden relative z-50 p-2 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "linear-gradient(45deg, #FF6F91, #FFB86F, #A259F7)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 2s ease infinite",
              }}
              aria-label="Toggle navigation menu"
          >
            <motion.div animate={isOpen ? { rotate: 45 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <span className="text-2xl text-white">✕</span> : <span className="text-2xl text-white">☰</span>}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #FF6F91, #FFB86F, #A259F7, #6EC6FF, #FFE156)",
                    backgroundSize: "400% 400%",
                    animation: "gradient-shift 4s ease infinite",
                  }}
              >
                <motion.ul
                    className="flex flex-col items-center py-6 gap-4"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                  {navLinks.map(({ href, label, emoji }, index) => {
                    const isActive = pathname === href
                    return (
                        <motion.li
                            key={href}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Link
                              href={href}
                              onClick={() => setIsOpen(false)}
                              className={`font-heading text-2xl px-8 py-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transform hover:scale-110 block text-center min-w-[200px] ${
                                  isActive
                                      ? "text-white bg-tie-dye-purple/80 backdrop-blur-sm shadow-lg shadow-tie-dye-pink/50"
                                      : "text-white bg-white/20 backdrop-blur-sm hover:bg-white/30"
                              }`}
                              style={{
                                boxShadow: isActive ? "0 0 20px #FF6F91" : "0 4px 15px rgba(0, 0, 0, 0.2)",
                              }}
                              tabIndex={0}
                          >
                            <motion.span
                                animate={{
                                  rotate: [0, 10, -10, 0],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 2,
                                  ease: "easeInOut",
                                }}
                                className="inline-block mr-3"
                            >
                              {emoji}
                            </motion.span>
                            {label}
                            <span className="sr-only">{isActive ? " (current page)" : ""}</span>
                          </Link>
                        </motion.li>
                    )
                  })}

                  {/* Fun decorative elements */}
                  <div className="mt-6 text-center">
                    <motion.span
                        className="text-3xl inline-block"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 4,
                          ease: "easeInOut",
                        }}
                    >
                      🌸
                    </motion.span>
                  </div>
                </motion.ul>
              </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </nav>
  )
}
