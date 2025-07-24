"use client"

import { motion } from "framer-motion"

export default function CatHeadSVG({ isTalking = false }: { isTalking?: boolean }) {
    return (
        <svg
            width="180"
            height="180"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
            aria-label="Cosmic Cat Head"
        >
            {/* Cat head - simple ellipse */}
            <ellipse cx="110" cy="130" rx="75" ry="70" fill="#FFD6E0" stroke="#A259F7" strokeWidth="6" />
            {/* Left ear - moved outwards */}
            <path d="M60 85 L40 45 L90 75 Z" fill="#FFD6E0" stroke="#A259F7" strokeWidth="6" strokeLinejoin="round" />
            {/* Right ear - moved outwards */}
            <path d="M160 85 L180 45 L130 75 Z" fill="#FFD6E0" stroke="#A259F7" strokeWidth="6" strokeLinejoin="round" />
            {/* Inner ears - moved outwards */}
            <path d="M65 75 L55 55 L80 70 Z" fill="#FF6F91" />
            <path d="M155 75 L165 55 L140 70 Z" fill="#FF6F91" />
            {/* Cheek Blushes */}
            <ellipse cx="70" cy="145" rx="12" ry="8" fill="#FF6F91" opacity="0.5" />
            <ellipse cx="150" cy="145" rx="12" ry="8" fill="#FF6F91" opacity="0.5" />
            {/* Cuter Cat Eyes (Static) */}
            <g>
                {/* Main eye shape (white) */}
                <ellipse cx="85" cy="128" rx="18" ry="16" fill="#fff" />
                <ellipse cx="135" cy="128" rx="18" ry="16" fill="#fff" />
                {/* Large pupils (purple) */}
                <ellipse cx="85" cy="128" rx="10" ry="12" fill="#A259F7" />
                <ellipse cx="135" cy="128" rx="10" ry="12" fill="#A259F7" />
                {/* Large highlight */}
                <ellipse cx="90" cy="122" rx="5" ry="6" fill="#fff" />
                <ellipse cx="140" cy="122" rx="5" ry="6" fill="#fff" />
                {/* Small highlight */}
                <ellipse cx="82" cy="135" rx="2" ry="2.5" fill="#fff" />
                <ellipse cx="132" cy="135" rx="2" ry="2.5" fill="#fff" />
            </g>
            {/* Cat nose - triangular */}
            <path d="M110 145 L105 155 L115 155 Z" fill="#FF6F91" />

            {/* Mouth Group */}
            <g>
                {/* Top :3 part */}
                <motion.path
                    d="M 102, 168 C 102, 173, 110, 173, 110, 168 C 110, 173, 118, 173, 118, 168"
                    stroke="#A259F7"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        y: isTalking ? [0, -2, 0] : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: isTalking ? Number.POSITIVE_INFINITY : 0,
                        ease: "easeInOut",
                    }}
                />
                {/* Bottom 'u' lip */}
                <motion.path
                    stroke="#A259F7"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"

                    // Don’t animate from an empty path on mount
                    initial={{ d: "M 106 173 Q 110 175 114 173" }}

                    animate={{
                        d: isTalking
                            ? [
                                "M 106 173 Q 110 175 114 173", // resting
                                "M 104 171 Q 110 180 116 171", // talking
                                "M 106 173 Q 110 175 114 173", // back to resting
                            ]
                            : "M 106 173 Q 110 175 114 173",   // always rest when not talking
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: isTalking ? Infinity : 0,
                        ease: "easeInOut",
                    }}
                />

            </g>

            {/* Whiskers - Flipped with transform */}
            <g transform="matrix(-1 0 0 1 220 0)">
                <line x1="15" y2="135" x2="60" y1="130" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
                <line x1="15" y2="145" x2="60" y1="145" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
                <line x1="15" y2="155" x2="60" y1="160" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
                <line x1="205" y2="135" x2="160" y1="130" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
                <line x1="205" y2="145" x2="160" y1="145" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
                <line x1="205" y2="155" x2="160" y1="160" stroke="#A259F7" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Flower Crown */}
            <g>
                {/* Flower 1 (Yellow) */}
                <g transform="translate(70, 70)">
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFE156"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(0)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFE156"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(72)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFE156"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(144)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFE156"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(216)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFE156"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(288)"
                    />
                    <circle cx="0" cy="0" r="3" fill="#A259F7" />
                </g>
                {/* Flower 2 (Orange) */}
                <g transform="translate(90, 60) scale(0.8)">
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFB86F"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(0)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFB86F"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(72)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFB86F"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(144)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFB86F"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(216)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#FFB86F"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(288)"
                    />
                    <circle cx="0" cy="0" r="3" fill="#A259F7" />
                </g>
                {/* Flower 3 (Purple) */}
                <g transform="translate(110, 55)">
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#A259F7"
                        stroke="#fff"
                        strokeWidth="2"
                        transform="rotate(0)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#A259F7"
                        stroke="#fff"
                        strokeWidth="2"
                        transform="rotate(72)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#A259F7"
                        stroke="#fff"
                        strokeWidth="2"
                        transform="rotate(144)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#A259F7"
                        stroke="#fff"
                        strokeWidth="2"
                        transform="rotate(216)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#A259F7"
                        stroke="#fff"
                        strokeWidth="2"
                        transform="rotate(288)"
                    />
                    <circle cx="0" cy="0" r="3" fill="#fff" />
                </g>
                {/* Flower 4 (Green) */}
                <g transform="translate(130, 60) scale(0.8)">
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#7BE495"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(0)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#7BE495"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(72)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#7BE495"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(144)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#7BE495"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(216)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#7BE495"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(288)"
                    />
                    <circle cx="0" cy="0" r="3" fill="#A259F7" />
                </g>
                {/* Flower 5 (Blue) */}
                <g transform="translate(150, 70)">
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#6EC6FF"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(0)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#6EC6FF"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(72)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#6EC6FF"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(144)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#6EC6FF"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(216)"
                    />
                    <path
                        d="M0 -10 C 5 -10, 5 -5, 0 0 C -5 -5, -5 -10, 0 -10 Z"
                        fill="#6EC6FF"
                        stroke="#A259F7"
                        strokeWidth="2"
                        transform="rotate(288)"
                    />
                    <circle cx="0" cy="0" r="3" fill="#A259F7" />
                </g>
            </g>
        </svg>
    )
}
