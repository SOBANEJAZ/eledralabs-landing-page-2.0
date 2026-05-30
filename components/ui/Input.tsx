import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  isMono?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, isMono = false, disabled, ...props }, ref) => {
    // Unique ID for form associations
    const id = React.useId()

    // Base text input styling (aligned precisely to Contact.tsx)
    const inputStyles = [
      'w-full bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white font-sans transition-colors outline-hidden',
      'placeholder:text-white/20',
      'focus:border-white/40',
      error ? 'border-accent-orange/50 focus:border-accent-orange/80' : '',
      disabled ? 'opacity-50 cursor-not-allowed bg-surface' : '',
      isMono ? 'font-favorit' : '',
      className,
    ].filter(Boolean).join(' ')

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={id}
            className={`text-xs uppercase font-favorit tracking-wider text-white/50 ${
              isMono ? 'font-favorit' : 'font-sans'
            }`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          disabled={disabled}
          className={inputStyles}
          {...props}
        />
        {error && (
          <span className="text-2xs text-accent-orange font-sans mt-0.5">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span className="text-2xs text-text-mute font-sans mt-0.5">
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
