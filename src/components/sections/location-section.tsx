"use client"
import * as React from "react"
import { SITE_CONFIG } from "@/constants/site"
import { motion } from "framer-motion"

export function LocationSection() {
    return (
        <section id="lokasi" className="relative w-full py-24 md:py-32 bg-brand-background overflow-hidden border-t border-brand-border/30">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                >
                    {/* Header Area */}
                    <div className="w-full lg:w-1/3">
                        <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Visit Us</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-secondary mb-8">
                            Fasya Brownies
                        </h2>
                        <p className="text-brand-text-secondary leading-relaxed mb-8 max-w-[300px]">
                            Find us at our location.
                        </p>
                        <a
                            href={SITE_CONFIG.mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-brand-secondary font-bold tracking-widest uppercase text-xs hover:text-brand-primary transition-colors duration-300 group"
                        >
                            <span className="w-8 h-[1px] bg-brand-secondary group-hover:bg-brand-primary transition-colors duration-300"></span>
                            <span>Open in Google Maps</span>
                        </a>
                    </div>

                    {/* Info Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-2 lg:pt-0">

                        <div className="flex flex-col">
                            <span className="block text-brand-text-muted text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Address</span>
                            <p className="text-brand-text-secondary leading-relaxed font-medium">
                                {SITE_CONFIG.address}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="block text-brand-text-muted text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Opening Hours</span>
                            <p className="text-brand-text-secondary leading-relaxed font-medium whitespace-pre-line">
                                {SITE_CONFIG.workingHours.replace(" - ", "\n")}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="block text-brand-text-muted text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Contact</span>
                            <p className="text-brand-text-secondary leading-relaxed font-medium">
                                {SITE_CONFIG.whatsapp}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="block text-brand-text-muted text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Service Area</span>
                            <p className="text-brand-text-secondary leading-relaxed font-medium">
                                Melayani pengiriman nasional via Paxel & JNE YES.
                            </p>
                        </div>

                        {/* Embedded Map */}
                        <div className="md:col-span-2 w-full mt-6 h-64 md:h-80 overflow-hidden shadow-sm border border-brand-border/40">
                            <iframe
                                src="https://maps.google.com/maps?q=Fasya+Brownies+Panggang&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(20%) contrast(110%)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}
