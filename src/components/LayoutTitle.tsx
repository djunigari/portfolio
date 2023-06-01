'use client'
import { useTranslations } from 'next-intl'

interface LayoutTitleProps {
  title: string
}
export function LayoutTitle({ title }: LayoutTitleProps) {
  const t = useTranslations('layout.title')
  return (
    <h1 className="p-2 text-xl font-bold max-w-max mx-auto underline underline-offset-0">
      {t(title)}
    </h1>
  )
}
