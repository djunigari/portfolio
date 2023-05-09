import { Dispatch, SetStateAction, useEffect, useState } from 'react'

// https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/
export default function useStickyState<T>(
  defaultValue: T | undefined,
  key: string,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [value, setValue] = useState<T | undefined>(defaultValue)

  useEffect(() => {
    const stickyValue = localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue) as T)
    }
  }, [key, setValue])

  return [
    value,
    (v) => {
      localStorage.setItem(key, JSON.stringify(v))
      setValue(v)
    },
  ]
}
