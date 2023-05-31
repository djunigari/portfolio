'use client'

export function BackToTopButton() {
  return (
    <span
      className="fixed bottom-0 right-0 h-8 w-8 cursor-pointer mr-4 mb-4 -rotate-90"
      onClick={() => {
        document.documentElement.scrollTo({ top: 0 })
      }}
    >
      Top
    </span>
  )
}
