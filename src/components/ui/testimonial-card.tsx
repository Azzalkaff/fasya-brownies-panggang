import * as React from "react"
import { Testimonial } from "@/types/testimonial"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-brand-surface rounded-[20px] p-8 shadow-sm border border-brand-border/50">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? "fill-brand-primary text-brand-primary" : "fill-brand-border text-brand-border"}`} 
          />
        ))}
      </div>
      <p className="text-brand-text-primary text-lg italic mb-6 flex-grow leading-relaxed">
        &quot;{testimonial.review}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-brand-surface-alt flex items-center justify-center text-brand-secondary font-heading font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-brand-secondary">{testimonial.name}</p>
          <p className="text-brand-text-muted text-sm">Pelanggan Setia</p>
        </div>
      </div>
    </div>
  )
}
