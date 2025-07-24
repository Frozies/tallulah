// components/WisdomClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import CosmicCat from './CosmicCat';
import { motion } from 'framer-motion';
import AnimaleseSpeaker from '@/lib/talker';

export default function WisdomClient() {
    const [wisdom, setWisdom] = useState('...');
    const [isTalking, setIsTalking] = useState(false);
    const [loading, setLoading] = useState(false);

    // Instantiate once
    const [speaker] = useState(
        () =>
            new AnimaleseSpeaker('/animalese.wav', {
                shorten: true,
                pitch: 1,
                playbackRate: 0.75,
            })
    );

    // Only initialize Animalese on mount
    useEffect(() => {
        (async () => {
            try {
                await speaker.init();
            } catch (e) {
                console.error('Failed to initialize Animalese:', e);
            }
        })();
    }, [speaker]);

    // Fetch + speak on button click
    const fetchWisdom = async () => {
        setLoading(true);
        setIsTalking(true);
        try {
            const res = await fetch('/api/kitty-wisdom');
            const { wisdom: text } = await res.json();
            setWisdom(text);
            await speaker.speak(text);
            setIsTalking(false);
        } catch (e) {
            console.error(e);
            setWisdom('The cosmic cat is napping. Try again!');
            setIsTalking(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center gap-8 mt-10">
                <motion.h1
                    className="font-heading text-4xl text-center text-tie-dye-purple mb-2"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Cosmic Cat Wisdom
                </motion.h1>

                <CosmicCat wisdom={wisdom} isTalking={isTalking} />

                <motion.button
                    whileHover={{ scale: 1.07, boxShadow: '0 0 12px 2px #A259F7' }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-6 px-8 text-black py-3 rounded-full font-heading text-xl bg-tie-dye-purple text-white shadow-lg border-4 border-tie-dye-pink transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-tie-dye-pink"
                    onClick={fetchWisdom}
                    disabled={loading}
                >
                    {loading ? 'Meowing...' : 'Another Wisdom'}
                </motion.button>
            </div>
        </Layout>
    );
}
