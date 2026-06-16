"use client"
import * as React from "react"
import { testimonials } from "@/data/testimonials"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimoni" className="py-16 md:py-32 bg-brand-secondary-dark relative overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">
      
      {/* Massive Background Quote Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary opacity-5 pointer-events-none">
        <Quote className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1000px]">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs">Client Voices</span>
        </div>

        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full text-center flex flex-col items-center"
            >
              <div className="flex gap-1.5 mb-8 justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  >
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-brand-primary fill-brand-primary" />
                  </motion.div>
                ))}
              </div>

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed md:leading-relaxed mb-12 tracking-wide text-balance"
              >
                "{testimonials[currentIndex].review}"
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-8 h-[1px] bg-brand-primary mb-4"></div>
                <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-white/50 text-xs tracking-widest uppercase mt-1">
                  Verified Customer
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mt-24 relative z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[2px] transition-all duration-700 ${
                idx === currentIndex ? "w-16 bg-brand-primary" : "w-6 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
