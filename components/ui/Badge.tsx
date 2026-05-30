import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline'
  isMono?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', isMono = true, children, ...props }, ref) => {
    // Base design (enforce rounded-none)
    const baseStyle = 'inline-flex items-center gap-1.5 px-2 py-0.5 text-2xs font-semibold leading-none select-none border transition-colors rounded-none'
    
    // Variant maps aligned to live site
    const variants = {
      default: 'bg-transparent text-white/35 border-border',
      accent: 'bg-accent-green-soft text-accent-green border-accent-green-border',
      outline: 'bg-transparent text-white/20 border-border',
    }

    // Typography class
    const typography = isMono
      ? 'font-favorit uppercase tracking-wider'
      : 'font-sans'

    return (
      <span
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${typography} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
