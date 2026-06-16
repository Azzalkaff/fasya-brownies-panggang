import * as React from "react"
import { SITE_CONFIG } from "@/constants/site"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#2D1A12] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-1">
                        <h3 className="font-heading text-3xl font-bold mb-6 text-brand-primary">{SITE_CONFIG.name}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="flex gap-4">
                            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 tracking-wide uppercase text-gray-300">Navigasi</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Beranda</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Produk</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Testimoni</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-lg mb-6 tracking-wide uppercase text-gray-300">Kontak Kami</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                                <span>{SITE_CONFIG.address}</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                                <span>+62 812-7182-8219</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
