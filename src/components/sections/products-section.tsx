"use client"
import * as React from "react"
import { products } from "@/data/products"
import { formatPrice } from "@/constants/site"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Product } from "@/types/product"
import { useCart } from "@/context/CartContext"
import { ShoppingBag } from "lucide-react"

function ProductSpotlight({ product, isEven }: { product: Product, isEven: boolean }) {
    const [selectedVariantIdx, setSelectedVariantIdx] = React.useState(0)
    const [isBitten, setIsBitten] = React.useState(false) // For mobile interaction
    const activeVariant = product.variants[selectedVariantIdx] || product.variants[0] || { id: 'default', name: 'Regular', price: 0 }
    const activeImage = activeVariant.image || product.baseImage
    const { addToCart } = useCart()

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}
        >
            {/* Huge Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="relative w-full aspect-square md:aspect-[4/3] overflow-visible">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div 
                                className="group/image relative w-full h-full cursor-pointer"
                                onClick={() => setIsBitten(!isBitten)}
                            >
                                <Image
                                    src={activeImage}
                                    alt={product.name}
                                    fill
                                    className={`object-contain drop-shadow-2xl transition-opacity duration-500 ${(product.hoverImage || activeVariant.hoverImage) ? 'group-hover/image:opacity-0' : ''} ${isBitten ? '!opacity-0' : ''}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {(product.hoverImage || activeVariant.hoverImage) && (
                                    <>
                                        <Image
                                            src={(activeVariant.hoverImage || product.hoverImage)!}
                                            alt={`${product.name} alternate`}
                                            fill
                                            className={`object-contain drop-shadow-2xl absolute inset-0 transition-opacity duration-500 ${isBitten ? '!opacity-100' : 'opacity-0 group-hover/image:opacity-100'}`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm md:hidden pointer-events-none opacity-70">
                                            👆 Tap
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Minimalist Typography */}
            <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'}`}>
                <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
                    {product.isPopular ? "Best Seller" : "Classic Collection"}
                </span>
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary mb-6 group-hover:text-brand-primary transition-colors duration-500">
                    {product.name}
                </h3>
                <p className="text-brand-text-secondary text-lg leading-relaxed mb-8 max-w-[400px]">
                    {product.description}
                </p>

                {/* Variant Selectors (Segmented Control Style) */}
                {product.variants.length > 1 && (
                    <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'justify-start' : 'justify-start md:justify-end'} w-full p-1 bg-brand-border/20 rounded-full inline-flex md:w-auto w-max`}>
                        {product.variants.map((variant, idx) => {
                            const isActive = idx === selectedVariantIdx;
                            return (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedVariantIdx(idx)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
                                        isActive ? "text-brand-secondary-dark" : "text-brand-text-secondary hover:text-brand-primary"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId={`active-pill-${product.id}`}
                                            className="absolute inset-0 bg-brand-primary rounded-full shadow-sm"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                    <span className="relative z-10">{variant.name}</span>
                                </button>
                            );
                        })}
                    </div>
                )}

                <div className={`flex items-center gap-6 mt-4 ${isEven ? 'justify-start' : 'justify-start md:justify-end'} w-full`}>
                    <div className="relative h-10 w-40 flex items-center overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={activeVariant.price}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute text-2xl md:text-3xl font-light text-brand-secondary tracking-wide"
                            >
                                {formatPrice(activeVariant.price)}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => addToCart(product, activeVariant)}
                        className="flex items-center gap-2 bg-brand-primary text-brand-secondary-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-secondary hover:text-white transition-colors shadow-md"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        <span className="hidden sm:inline">Ikut Pre Order</span>
                        <span className="sm:hidden">Pre Order</span>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

function ProductGridCard({ product }: { product: Product }) {
    const [selectedVariantIdx, setSelectedVariantIdx] = React.useState(0)
    const [isBitten, setIsBitten] = React.useState(false) // For mobile interaction
    const activeVariant = product.variants[selectedVariantIdx] || product.variants[0] || { id: 'default', name: 'Regular', price: 0 }
    const activeImage = activeVariant.image || product.baseImage
    const { addToCart } = useCart()

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl p-6 flex flex-col h-full border border-brand-border/20 shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-brand-background/50">
                <div 
                    className="group/image relative w-full h-full cursor-pointer"
                    onClick={() => setIsBitten(!isBitten)}
                >
                    <Image 
                        src={activeImage}
                        alt={product.name}
                        fill
                        className={`object-contain p-4 transition-opacity duration-500 ${(product.hoverImage || activeVariant.hoverImage) ? 'group-hover/image:opacity-0' : ''} ${isBitten ? '!opacity-0' : ''}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {(product.hoverImage || activeVariant.hoverImage) && (
                        <>
                            <Image
                                src={(activeVariant.hoverImage || product.hoverImage)!}
                                alt={`${product.name} alternate`}
                                fill
                                className={`object-contain p-4 absolute inset-0 transition-opacity duration-500 ${isBitten ? '!opacity-100' : 'opacity-0 group-hover/image:opacity-100'}`}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded-full backdrop-blur-sm lg:hidden pointer-events-none opacity-60">
                                👆 Tap
                            </div>
                        </>
                    )}
                </div>
            </div>
            
            <div className="flex-1 flex flex-col">
                <h4 className="font-heading text-xl font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                <p className="text-brand-text-muted text-sm line-clamp-2 mb-4 flex-1">{product.description}</p>
                
                {product.variants.length > 1 && (
                    <div className="mb-4">
                        <select 
                            value={selectedVariantIdx}
                            onChange={(e) => setSelectedVariantIdx(Number(e.target.value))}
                            className="w-full bg-brand-background border border-brand-border/50 text-brand-secondary text-sm font-medium rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-primary cursor-pointer transition-colors"
                        >
                            {product.variants.map((v, idx) => (
                                <option key={v.id} value={idx}>{v.name} - {formatPrice(v.price)}</option>
                            ))}
                        </select>
                    </div>
                )}
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-border/20">
                    {product.variants.length === 1 ? (
                        <span className="font-bold text-brand-secondary text-lg">
                            {formatPrice(activeVariant.price)}
                        </span>
                    ) : (
                        <div className="flex flex-col">
                            <span className="text-[10px] text-brand-text-muted uppercase tracking-wider font-bold mb-1">Mulai dari</span>
                            <span className="font-bold text-brand-secondary text-lg leading-none">{formatPrice(product.variants[0].price)}</span>
                        </div>
                    )}
                    
                    <button 
                        onClick={() => addToCart(product, activeVariant)}
                        className="bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-brand-secondary-dark w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0 ml-4"
                        aria-label="Add to cart"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export function ProductsSection() {
    const spotlightProducts = products.slice(0, 3);
    const gridProducts = products.slice(3);

    return (
        <section id="produk" className="py-16 md:py-32 lg:py-48 bg-brand-surface relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Minimalist Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 md:mb-32 flex flex-col items-center"
                >
                    <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">The Collection</span>
                    <h2 className="font-heading text-4xl md:text-6xl lg:text-[80px] font-bold text-brand-secondary leading-tight">
                        Signature Menu
                    </h2>
                    <div className="w-12 h-[1px] bg-brand-primary mt-10"></div>
                </motion.div>

                {/* Signature Spotlight List (Top 3) */}
                <div className="flex flex-col gap-16 md:gap-32 lg:gap-48 mb-24 md:mb-40">
                    {spotlightProducts.map((product, index) => (
                        <ProductSpotlight key={product.id} product={product} isEven={index % 2 === 0} />
                    ))}
                </div>

                {/* Grid Menu Section (Rest of products) */}
                {gridProducts.length > 0 && (
                    <div className="pt-24 border-t border-brand-border/30">
                        <div className="text-center mb-16">
                            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Explore More</span>
                            <h3 className="font-heading text-3xl md:text-5xl font-bold text-brand-secondary">Menu Lainnya</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {gridProducts.map(product => (
                                <ProductGridCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}
