import { useEffect, useState } from 'react'

// https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/
export default function useStickyState(
  defaultValue: string | undefined,
  key: string,
): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined>(defaultValue)

  useEffect(() => {
    const stickyValue = localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(stickyValue)
    }
  }, [key, setValue])

  return [
    value,
    (v) => {
      localStorage.setItem(key, v)
      setValue(v)
    },
  ]
}
