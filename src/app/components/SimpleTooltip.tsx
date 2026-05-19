import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './TechStackSection.css'

interface Props {
  content: React.ReactNode
  children: React.ReactElement
  delay?: number
}

export default function SimpleTooltip({ children, content, delay = 80 }: Props) {
  const [open, setOpen] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  const show = () => {
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(true), delay)
  }

  const hide = () => {
    if (timer.current) window.clearTimeout(timer.current)
    setOpen(false)
  }

  return (
    <span className="tooltip-wrapper" onMouseEnter={show} onFocus={show} onMouseLeave={hide} onBlur={hide}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="tooltip-card simple-tooltip"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="tooltip"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
