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
    <div className="flex flex-row gap-1 items-center">
      <div className="flex w-6 h-6 items-center">
        <Image src={flagUrl} alt="Country flag image" />
      </div>
      <span className="cursor-pointer hover:underline" onClick={onClick}>
        {displayName}
      </span>
    </div>
  )
}
