'use client'

import { BsSunFill, BsMoonFill } from 'react-icons/bs'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='font-semibold fill-current flex items-center gap-1' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
