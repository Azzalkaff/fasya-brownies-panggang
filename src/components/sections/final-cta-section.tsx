"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/constants/site"
import { PrimaryButton } from "../ui/primary-button"

export function FinalCtaSection() {
    return (
        <section className="bg-brand-secondary-dark py-32 md:py-48 overflow-hidden relative flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">

            <div className="container mx-auto px-6 max-w-[800px] relative z-10 text-center flex flex-col items-center">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.span variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">
                        Limited Batches
                    </motion.span>

                    <motion.h2 
                        variants={{
                            hidden: { opacity: 0, letterSpacing: "0.1em", y: 20 },
                            show: { opacity: 1, letterSpacing: "normal", y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-balance"
                    >
                        Siap Menikmati Potongan Pertama?
                    </motion.h2>

                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-[600px] mx-auto font-light">
                        Setiap loyang dipanggang dalam jumlah terbatas setiap harinya. Pesan sekarang sebelum kehabisan.
                    </motion.p>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full mt-4">
                        <div className="w-full sm:w-auto">
                            <PrimaryButton
                                className="px-8 py-4 w-full sm:w-auto text-lg shadow-xl shadow-brand-primary/20 transition-all hover:bg-opacity-80"
                                onClick={() => {
                                    const produkSection = document.getElementById('produk');
                                    if (produkSection) produkSection.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Pesan Pre-Order
                            </PrimaryButton>
                        </div>

                        <a
                            href={SITE_CONFIG.marketplace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#EE4D2D] px-8 py-4 rounded-full font-bold shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" alt="Shopee" className="w-6 h-6 object-contain" />
                            Order via Shopee
                        </a>

                        <a
                            href={SITE_CONFIG.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-6 h-6 object-contain" />
                            Follow Instagram
                        </a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
