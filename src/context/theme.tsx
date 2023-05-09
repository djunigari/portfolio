'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'

export const colors = ['green', 'red', 'blue']

export const ThemeContext = createContext<{
  color: string
  switchTheme: (value: string) => void
  isDarkTheme: boolean
  toggleThemeHandler: (value: boolean) => void
}>({
  color: colors[0],
  isDarkTheme: true,
  switchTheme: () => {},
  toggleThemeHandler: () => {},
})

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState(colors[0])
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleThemeHandler = () => {
    if (isDarkTheme) {
      document!.querySelector('body')!.classList.remove('theme-dark')
      document!.querySelector('body')!.classList.add('theme-light')
    } else {
      document!.querySelector('body')!.classList.remove('theme-light')
      document!.querySelector('body')!.classList.add('theme-dark')
    }
    setIsDarkTheme(!isDarkTheme)
  }

  const switchTheme = (theme: string) => {
    document!.querySelector('body')!.classList.remove(`theme-${color}`)
    document!.querySelector('body')!.classList.add(`theme-${theme}`)
    setColor(theme)
  }

  useEffect(() => {}, [])
  return (
    <ThemeContext.Provider
      value={{ color, switchTheme, isDarkTheme, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
