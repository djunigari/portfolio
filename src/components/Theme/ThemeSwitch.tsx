'use client'

import useStickyState from '@/hooks/useStickyState'
import { RadioGroup, Switch } from '@headlessui/react'

const colors = ['green', 'red', 'blue']
const modes = ['light', 'dark']

// https://www.skies.dev/tailwind-themes
export function ThemeSwitch() {
  const [color, setColor] = useStickyState(colors[0], 'theme-color')
  const [mode, setMode] = useStickyState(modes[0], 'theme-mode')

  return (
    <div
      className={[
        `flex flex-col justify-center bg-primaryBg`,
        color && `theme-${color}`,
        mode && `theme-${mode}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="bg-neutralBg text-onNeutralBg border-onNeutralBg mx-auto max-w-lg border-2 p-5 m-2">
        <h1 className="text-center text-3xl font-bold">Tailwind Themes</h1>
        <RadioGroup value={color} onChange={setColor}>
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
              checked={mode === 'dark'}
              onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
              <span className="bg-neutralBg ui-not-checked:translate-x-1 ui-checked:translate-x-6 inline-block h-4 w-4 transform rounded-full transition" />
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </div>
  )
}
