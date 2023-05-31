import Image from 'next/image'

export function TecnologyLogo({ url }: { url: string }) {
  return (
    <Image
      src={url.replace(`{theme}`, 'theme-gray')}
      width={20}
      height={20}
      loading="lazy"
      alt="tecnology logo"
    />
  )
}
