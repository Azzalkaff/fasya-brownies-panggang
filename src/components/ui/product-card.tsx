import * as React from "react"
import Image from "next/image"
import { Product } from "@/types/product"
import { formatPrice } from "@/constants/site"

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-[#F6F6F6] rounded-[32px] overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-square md:aspect-[4/3] mb-6 flex items-center justify-center mix-blend-multiply">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col mt-auto">
        <h3 className="font-heading text-xl font-bold text-[#2A4D40] mb-2">{product.name}</h3>
        <span className="font-bold text-[#C85A42]">{formatPrice(product.price)}</span>
      </div>
    </div>
  )
}
