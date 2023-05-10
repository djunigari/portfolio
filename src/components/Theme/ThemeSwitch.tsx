'use client'

import useStickyState from '@/hooks/useStickyState'
import { themes } from '@/interfaces/theme'
import { RadioGroup } from '@headlessui/react'
import { useEffect } from 'react'

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [theme, setTheme] = useStickyState<string>(themes[0], 'Theme')

  console.log('ThemeSwitch')
  useEffect(() => {
    document!.querySelector('body')!.classList.add(`theme-${theme}`)
  }, [theme])

  const switchTheme = (newTheme: string) => {
    document!.querySelector('body')!.classList.remove(`theme-${theme}`)
    setTheme(newTheme)
  }

  return (
    <div className={`flex flex-col justify-center bg-primaryBg`}>
      <div className="bg-neutralBg text-onNeutralBg border-onNeutralBg mx-auto max-w-lg border-2 p-5 m-2">
        <h1 className="text-center text-3xl font-bold">Tailwind Themes</h1>
        <RadioGroup value={theme} onChange={switchTheme}>
          <RadioGroup.Label className="mt-5 block">
            Select a color:
          </RadioGroup.Label>
          <div className="mt-2 flex justify-between space-x-8">
            {themes.map((c) => {
              return (
                <RadioGroup.Option
                  className="ui-checked:text-onPrimaryBg ui-checked:bg-primaryBg ui-checked:ring-primary ui-not-checked:ring-onNeutralBg flex h-20 w-full cursor-pointer items-center justify-center font-bold uppercase ring-2"
                  value={c}
                  key={c}
                >
                  {c}
                </RadioGroup.Option>
              )
            })}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
