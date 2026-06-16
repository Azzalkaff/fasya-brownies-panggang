"use client"
import * as React from "react"
import { SectionHeading } from "../shared/section-heading"
import { Clock, Star, Gift, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const promises = [
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Freshly Baked Daily",
        description: "Dipanggang setiap hari untuk menjaga kualitas rasa, aroma, dan tekstur terbaik saat tiba di tangan Anda."
    },
    {
        icon: <Star className="w-8 h-8" />,
        title: "Premium Ingredients",
        description: "Menggunakan chocolate asli dan bahan pilihan terbaik tanpa pemanis buatan."
    },
    {
        icon: <Gift className="w-8 h-8" />,
        title: "Perfect For Gifts",
        description: "Dikemas eksklusif dan sangat cocok untuk hadiah, hampers, dan momen spesial."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Trusted By Customers",
        description: "Telah dinikmati dan dipercaya oleh pelanggan setia untuk menemani setiap acara."
    }
]

export function BrandPromiseSection() {
    return (
        <section id="tentang-kami" className="py-24 md:py-32 bg-brand-background overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-border/40 pb-12">
                        <div className="max-w-[600px]">
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary mb-6 leading-tight">
                                Teman setia<br />di kala ramai maupun sepi
                            </h2>
                        </div>
                        <p className="text-brand-text-secondary text-lg md:text-xl max-w-[400px] leading-relaxed">
                            Kami berkomitmen memberikan kualitas terbaik di setiap gigitan brownies yang Anda nikmati.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-14 border-b border-brand-border/40 hover:border-brand-primary transition-colors duration-500 cursor-default"
                        >
                            {/* Large Number & Icon */}
                            <div className="w-full md:w-1/4 flex items-center gap-8 mb-6 md:mb-0">
                                <span className="font-heading text-6xl md:text-7xl font-black text-brand-primary/60 group-hover:text-brand-primary transition-colors duration-500">
                                    0{index + 1}
                                </span>
                                <div className="text-brand-secondary group-hover:text-brand-primary transition-colors duration-500 hidden md:block">
                                    {promise.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <div className="w-full md:w-1/3 mb-4 md:mb-0 pr-6">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-secondary group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                    {promise.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="w-full md:w-5/12 flex items-center justify-between">
                                <p className="text-brand-text-secondary text-lg leading-relaxed max-w-[400px]">
                                    {promise.description}
                                </p>

                                {/* Arrow indicator for elegance */}
                                <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-brand-border/0 group-hover:border-brand-primary/20 bg-transparent group-hover:bg-brand-primary/5 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-primary">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
