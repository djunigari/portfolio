import Image from 'next/image'

interface LanguageButtonProps {
  displayName: string
  flagUrl: string
  onClick: () => void
}

export function LanguageButton({
  displayName,
  flagUrl,
  onClick,
}: LanguageButtonProps) {
  return (
    <div className="flex flex-row gap-1 items-center bg-mutedBg p-1 rounded-sm">
      <div className="flex w-6 h-6 items-center" aria-label="Country flag">
        <Image
          src={flagUrl}
          alt="Country flag image"
          loading="lazy"
          width={20}
          height={20}
          className="rounded-full"
        />
      </div>
      <span
        className="cursor-pointer hover:underline text-xs"
        onClick={onClick}
      >
        {displayName}
      </span>
    </div>
  )
}
