'use client'

import { GA_MEASUREMENT_ID, existsGaId, pageview } from '@/libs/gtag'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

// https://qiita.com/ruiiixiii/items/2f3e3497d13ec804eb40
// https://zenn.dev/yutakobayashi/articles/head-google-analytics
export const GoogleAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    if (!existsGaId) return
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  )
}

export default function Analytics() {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      )}
    </>
  )
}
