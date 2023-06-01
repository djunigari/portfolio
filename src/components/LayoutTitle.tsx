'use client'
import { useTranslations } from 'next-intl'

interface LayoutTitleProps {
  title: string
}
export function LayoutTitle({ title }: LayoutTitleProps) {
  const t = useTranslations('layout.title')
  return (
    <h1 className="bg-neutral-content text-neutral opacity-80 p-2 text-lg font-bold rounded-t-md max-w-max">
      {t(title)}
    </h1>
  )
}
