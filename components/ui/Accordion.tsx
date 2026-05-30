'use client'

import React, { useState, useRef, useEffect } from 'react'

export interface AccordionProps {
  children: React.ReactNode
  allowMultiple?: boolean
  className?: string
}

interface AccordionContextType {
  openItems: Record<string, boolean>
  toggleItem: (id: string) => void
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

export const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return { ...prev, [id]: !prev[id] }
      } else {
        // Close others, toggle current
        const nextState: Record<string, boolean> = {}
        Object.keys(prev).forEach((k) => {
          if (k !== id) nextState[k] = false
        })
        nextState[id] = !prev[id]
        return nextState
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={`flex flex-col border-t border-border ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemProps {
  id: string
  title: string
  indexNumber?: string // e.g. "01", "02"
  children: React.ReactNode
  className?: string
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  indexNumber,
  children,
  className = '',
}) => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error('AccordionItem must be used inside an Accordion component')
  }

  const { openItems, toggleItem } = context
  const isOpen = !!openItems[id]
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<string>('0px')

  useEffect(() => {
    if (isOpen) {
      const el = contentRef.current
      if (el) {
        setHeight(`${el.scrollHeight}px`)
      }
    } else {
      setHeight('0px')
    }
  }, [isOpen, children])

  // Update height if viewport changes
  useEffect(() => {
    if (!isOpen) return
    const handleResize = () => {
      const el = contentRef.current
      if (el) setHeight(`${el.scrollHeight}px`)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <div className={`border-b border-border transition-all duration-300 ${className}`}>
      <button
        onClick={() => toggleItem(id)}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left font-favorit text-xs md:text-sm uppercase tracking-wider text-white hover:text-white/80 transition-colors focus:outline-hidden"
      >
        <span className="flex items-center gap-4 pr-4">
          {indexNumber && (
            <span className="text-white/25 font-favorit text-2xs md:text-xs">{indexNumber}</span>
          )}
          <span>{title}</span>
        </span>
        <svg
          className="w-3.5 h-3.5 shrink-0 text-white/40 transform transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="square"
            strokeWidth="2"
            d="M12 4v16m-8-8h16"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: height }}
      >
        <div className="pb-5 text-xs md:text-sm leading-relaxed text-white/50 pl-8 font-sans max-w-[720px]">
          {children}
        </div>
      </div>
    </div>
  )
}
