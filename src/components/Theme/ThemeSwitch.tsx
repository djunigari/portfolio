'use client'

import useStickyState from '@/hooks/useStickyState'
import daisyuiThemes from '@/json/themes/themes.json'
import React from 'react'
import { IoColorPalette } from 'react-icons/io5'

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [theme, setTheme] = useStickyState<string>(
    daisyuiThemes.themes[0],
    'Theme',
  )

  const switchTheme = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    newTheme: string,
  ) => {
    if (newTheme === theme) return
    document.querySelector('html')?.setAttribute('data-theme', newTheme)
    setTheme(newTheme)

    // https://reacthustle.com/blog/how-to-close-daisyui-dropdown-with-one-click
    document.getElementById('theme-dropdown')?.blur()
  }

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-ghost rounded-btn text-xs p-1">
        <IoColorPalette className={`w-6 h-6 mr-1`} />
        <span> {theme} </span>
      </button>

      <ul
        id="theme-dropdown"
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 block h-96 overflow-scroll"
      >
        {daisyuiThemes.themes.map((t) => (
          <li key={t}>
            <span onClick={(e) => switchTheme(e, t)}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
