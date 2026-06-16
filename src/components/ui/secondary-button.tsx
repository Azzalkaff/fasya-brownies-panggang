import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary disabled:pointer-events-none disabled:opacity-50",
          "border border-brand-secondary text-brand-secondary bg-transparent hover:bg-brand-surface-alt hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 min-h-[48px]",
          className
        )}
        {...props}
      />
    )
  }
)
SecondaryButton.displayName = "SecondaryButton"

export { SecondaryButton }
