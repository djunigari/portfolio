'use client'

import { colors } from '@/context/theme'
import useStickyState from '@/hooks/useStickyState'
import { RadioGroup, Switch } from '@headlessui/react'
import { useEffect } from 'react'

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [theme, setTheme] = useStickyState<string>(colors[0], 'Theme')
  const [isDarkTheme, setIsDarkTheme] = useStickyState<Boolean>(
    true,
    'isDarkTheme',
  )
  console.log('ThemeSwitch')
  useEffect(() => {
    document!.querySelector('body')!.classList.add(`theme-${theme}`)
  }, [theme])

  useEffect(() => {
    if (isDarkTheme) {
      document!.querySelector('body')!.classList.remove('theme-light')
      document!.querySelector('body')!.classList.add('theme-dark')
    } else {
      document!.querySelector('body')!.classList.remove('theme-dark')
      document!.querySelector('body')!.classList.add('theme-light')
    }
  }, [isDarkTheme])

  const toggleThemeHandler = () => {
    setIsDarkTheme(!isDarkTheme)
  }

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
            {colors.map((c) => {
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
        <Switch.Group>
          <div className="mt-10">
            <Switch.Label className="block">Enable dark mode:</Switch.Label>
            <Switch
              className="bg-onNeutralBg relative inline-flex h-6 w-11 items-center rounded-full"
              checked={Boolean(isDarkTheme)}
              onChange={toggleThemeHandler}
            >
              <span className="bg-neutralBg ui-not-checked:translate-x-1 ui-checked:translate-x-6 inline-block h-4 w-4 transform rounded-full transition" />
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </div>
  )
}
