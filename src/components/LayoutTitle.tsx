'use client'
import { useTranslations } from 'next-intl'

interface LayoutTitleProps {
  title: string
}
export function LayoutTitle({ title }: LayoutTitleProps) {
  const t = useTranslations('layout.title')
  return <h1>{t(title)}</h1>
}
