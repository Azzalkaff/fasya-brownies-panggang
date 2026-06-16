import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", centered && "items-center text-center", className)} {...props}>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-secondary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-text-secondary text-lg max-w-[720px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
