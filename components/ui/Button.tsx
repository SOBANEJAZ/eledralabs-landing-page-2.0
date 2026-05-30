import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  isMono?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isMono = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Base styles (enforce rounded-none everywhere)
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-sans font-normal transition-all duration-200 select-none cursor-pointer outline-hidden disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] rounded-none'

    // Variant styles aligned with live production Eledra site
    const variants = {
      primary: 'bg-accent-green hover:bg-accent-green/85 text-white shadow-md border border-accent-green-border focus-visible:ring-2 focus-visible:ring-accent-green/50',
      secondary: 'bg-button-container hover:bg-surface-hover text-text-mute hover:text-white border border-border focus-visible:ring-2 focus-visible:ring-border-active',
      outline: 'bg-transparent hover:bg-surface-hover text-white border border-border hover:border-border-active focus-visible:ring-2 focus-visible:ring-border-active',
      ghost: 'bg-transparent hover:bg-surface-hover text-text-mute hover:text-white focus-visible:ring-2 focus-visible:ring-border-active',
      white: 'bg-white hover:bg-white/90 active:scale-[0.98] text-black font-medium border border-white/10 shadow-xs focus-visible:ring-2 focus-visible:ring-white/50',
      glass: 'border border-white/26 bg-black/14 backdrop-blur-md text-white/90 hover:bg-white/8 hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/20',
    }

    // Size styles
    const sizes = {
      sm: 'px-3 py-1.5 text-xs min-h-[2rem]',
      md: 'px-4 py-2 text-sm min-h-[2.5rem]',
      lg: 'px-6 py-3 text-base min-h-[3rem]',
    }

    // Custom typographies
    const typography = isMono
      ? 'font-favorit uppercase tracking-wider'
      : 'font-sans'

    // Combine classes
    const classes = [
      baseStyles,
      variants[variant],
      sizes[size],
      typography,
      className,
    ].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={classes}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!isLoading && iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        
        {children}
        
        {!isLoading && iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
