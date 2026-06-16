"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, ChefHat, Leaf, ShoppingBag } from "lucide-react"
import { SITE_CONFIG } from "@/constants/site"

function useSynchronizedTypewriter(word1: string, word2: string) {
    const [text1, setText1] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [phase, setPhase] = React.useState(0);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;

        if (phase === 0) {
            if (text1.length < word1.length) {
                timer = setTimeout(() => setText1(word1.substring(0, text1.length + 1)), 150);
            } else {
                setPhase(1);
            }
        } else if (phase === 1) {
            if (text2.length < word2.length) {
                timer = setTimeout(() => setText2(word2.substring(0, text2.length + 1)), 150);
            } else {
                setPhase(2);
            }
        } else if (phase === 2) {
            timer = setTimeout(() => setPhase(3), 2500);
        } else if (phase === 3) {
            if (text2.length > 0) {
                timer = setTimeout(() => setText2(word2.substring(0, text2.length - 1)), 70);
            } else {
                setPhase(4);
            }
        } else if (phase === 4) {
            if (text1.length > 0) {
                timer = setTimeout(() => setText1(word1.substring(0, text1.length - 1)), 70);
            } else {
                setPhase(5);
            }
        } else if (phase === 5) {
            timer = setTimeout(() => setPhase(0), 1000);
        }

        return () => clearTimeout(timer);
    }, [text1, text2, phase, word1, word2]);

    return {
        text1,
        text2,
        showCursor1: phase === 0 || phase === 4 || phase === 5,
        showCursor2: phase === 1 || phase === 2 || phase === 3
    };
}

export function HeroSection() {
    const { text1, text2, showCursor1, showCursor2 } = useSynchronizedTypewriter("Legit", "Ngangenin");

    return (
        <section id="home" className="relative w-full bg-brand-background overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24">

            {/* Full Section Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="/main.png"
                    alt="Fasya Brownies Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay to make white text readable */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-[1440px]">
                <div className="flex flex-col items-center text-center">
                    <div className="max-w-[1000px] mx-auto flex flex-col items-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mx-auto mb-8 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            Brownies & Cakes
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-heading text-4xl md:text-6xl lg:text-[80px] leading-tight font-bold text-white mb-6 text-balance drop-shadow-xl"
                        >
                            Si{" "}
                            <span className="relative inline-flex items-center text-brand-primary">
                                <span className="opacity-0 pointer-events-none">Legit</span>
                                <span className="absolute left-0 top-0 h-full flex items-center whitespace-pre">
                                    {text1}
                                    <span className={`w-[3px] h-[0.9em] bg-brand-primary ml-[2px] opacity-70 ${showCursor1 ? 'animate-[pulse_1s_ease-in-out_infinite]' : 'hidden'}`}></span>
                                </span>
                            </span>
                            {" "}Yang Selalu{" "}
                            <span className="relative inline-flex items-center text-brand-primary">
                                <span className="opacity-0 pointer-events-none">Ngangenin</span>
                                <span className="absolute left-0 top-0 h-full flex items-center whitespace-pre">
                                    {text2}
                                    <span className={`w-[3px] h-[0.9em] bg-brand-primary ml-[2px] opacity-70 ${showCursor2 ? 'animate-[pulse_1s_ease-in-out_infinite]' : 'hidden'}`}></span>
                                </span>
                            </span>
                        </motion.h1>
                    </div>

                    {/* Elevated Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
                    >
                        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl shadow-lg">
                            <ShieldCheck className="w-6 h-6 text-brand-primary" />
                            <span className="text-white text-sm font-bold tracking-wide">100% Halal</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl shadow-lg">
                            <ChefHat className="w-6 h-6 text-brand-primary" />
                            <span className="text-white text-sm font-bold tracking-wide">Freshly Baked</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl shadow-lg">
                            <Leaf className="w-6 h-6 text-brand-primary" />
                            <span className="text-white text-sm font-bold tracking-wide">Premium Recipe</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
