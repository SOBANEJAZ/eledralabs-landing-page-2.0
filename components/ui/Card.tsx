import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'raised' | 'pillar' | 'lime-testimonial' | 'orange-testimonial'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    // Style configurations (enforce rounded-none)
    const baseStyle = 'border border-border font-sans transition-all duration-300 relative overflow-hidden bg-surface-card rounded-none'
    
    const variants = {
      default: '',
      raised: 'bg-surface-raised border-border-active shadow-md',
      pillar: 'border-border bg-gradient-to-b from-white/[0.055] via-white/[0.012] to-white/[0.01] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_42px_rgba(0,0,0,0.28)] hover:border-white/18 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_64px_rgba(0,0,0,0.32)] transition-all duration-350 cursor-pointer',
      'lime-testimonial': 'bg-accent-lime text-black border-none',
      'orange-testimonial': 'bg-accent-orange text-white border-none',
    }

    return (
      <div
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-5 pb-3 flex flex-col gap-1 border-b border-border/40 rounded-none ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-18 font-sans font-medium text-white tracking-tight leading-tight rounded-none ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', children, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-xs text-text-mute font-sans leading-normal rounded-none ${className}`}
      {...props}
    >
      {children}
    </p>
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-5 text-sm text-white/70 leading-6 font-sans rounded-none ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-5 pt-3 border-t border-border/40 flex items-center justify-between gap-4 rounded-none ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)
CardFooter.displayName = 'CardFooter'
