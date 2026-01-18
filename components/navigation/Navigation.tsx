'use client'

import { useState } from 'react'
import { NavBar } from './NavBar'
import { MobileMenu } from './MobileMenu'

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavBar open={open} onToggle={() => setOpen(!open)} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}