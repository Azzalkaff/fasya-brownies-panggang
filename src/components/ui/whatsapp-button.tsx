import * as React from "react"
import { cn } from "@/lib/utils"
import { FaWhatsapp } from "react-icons/fa"
import { getWhatsAppLink } from "@/constants/site"

export interface WhatsAppButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  message?: string
}

const WhatsAppButton = React.forwardRef<HTMLAnchorElement, WhatsAppButtonProps>(
  ({ className, children, message, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] disabled:pointer-events-none disabled:opacity-50",
          "bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 min-h-[48px] gap-2",
          className
        )}
        {...props}
      >
        <FaWhatsapp className="w-6 h-6" />
        {children || "Pesan Sekarang"}
      </a>
    )
  }
)
WhatsAppButton.displayName = "WhatsAppButton"

export { WhatsAppButton }
