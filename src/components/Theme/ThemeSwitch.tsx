'use client'

import useStickyState from '@/hooks/useStickyState'
import daisyuiThemes from '@/json/themes/themes.json'
import { useEffect } from 'react'
import { IoColorPalette } from 'react-icons/io5'

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [theme, setTheme] = useStickyState<string>(
    daisyuiThemes.themes[0],
    'Theme',
  )

  useEffect(() => {
    if (theme) document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  const switchTheme = (newTheme: string) => {
    if (newTheme === theme) return
    setTheme(newTheme)

    // https://reacthustle.com/blog/how-to-close-daisyui-dropdown-with-one-click
    document.getElementById('theme-dropdown')?.blur()
  }

  return (
    <div className="dropdown dropdown-end">
      {/* need to be a label, because daisyui do not set visibility when using button  */}
      <label tabIndex={0} className="btn btn-ghost rounded-btn text-xs p-1">
        <IoColorPalette className={`w-6 h-6 mr-1`} />
        <span> {theme} </span>
      </label>

      <ul
        id="theme-dropdown"
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 block max-h-96 overflow-scroll"
      >
        {daisyuiThemes.themes.map((t) => (
          <li key={t}>
            <span onClick={() => switchTheme(t)}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
