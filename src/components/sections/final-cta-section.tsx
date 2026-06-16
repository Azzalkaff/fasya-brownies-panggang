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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">
                        Limited Batches
                    </span>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-balance">
                        Siap Menikmati Potongan Pertama?
                    </h2>

                    <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-[600px] mx-auto font-light">
                        Setiap loyang dipanggang dalam jumlah terbatas setiap harinya. Pesan sekarang sebelum kehabisan.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full mt-4">
                        <PrimaryButton
                            className="px-8 py-4 w-full sm:w-auto text-lg shadow-xl shadow-brand-primary/20"
                            onClick={() => {
                                const produkSection = document.getElementById('produk');
                                if (produkSection) produkSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Pesan Pre-Order
                        </PrimaryButton>

                        <a
                            href={SITE_CONFIG.marketplace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#EE4D2D] px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" alt="Shopee" className="w-6 h-6 object-contain" />
                            Order via Shopee
                        </a>

                        <a
                            href={SITE_CONFIG.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-6 h-6 object-contain" />
                            Follow Instagram
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
