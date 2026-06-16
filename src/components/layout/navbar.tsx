"use client"
import * as React from "react"
import { WhatsAppButton } from "../ui/whatsapp-button"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const { itemCount, toggleDrawer } = useCart()

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-70 transition-all duration-500 ${scrolled ? 'bg-brand-secondary-dark/95 backdrop-blur-xl border-b border-white/5 shadow-2xl h-16 md:h-20' : 'bg-transparent h-24 md:h-28'}`}>
            <div className="container mx-auto px-6 max-w-[1440px] h-full flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Fasya Brownies" className="h-12 md:h-16 w-auto drop-shadow-md" />
                </div>

                <div className="hidden md:flex items-center gap-10 text-white/90 font-medium tracking-wide text-sm uppercase">
                    <a href="#home" className="hover:text-brand-primary transition-colors">Home</a>
                    <a href="#tentang-kami" className="hover:text-brand-primary transition-colors">Tentang Kami</a>
                    <a href="#produk" className="hover:text-brand-primary transition-colors">Produk</a>
                    <a href="#testimoni" className="hover:text-brand-primary transition-colors">Testimoni</a>
                    <a href="#lokasi" className="hover:text-brand-primary transition-colors">Lokasi</a>
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={toggleDrawer}
                        className="relative p-2 text-white/90 hover:text-brand-primary transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                        {itemCount > 0 && (
                            <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-brand-primary text-brand-secondary-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <WhatsAppButton className="px-4 py-2 min-h-0 h-10 inline-flex text-xs md:text-sm md:px-6 md:h-11">
                        Pesan Sekarang
                    </WhatsAppButton>
                </div>
            </div>
        </nav>
    )
}
