import LanguageMenu from '../Internationalization/LanguageMenu'
import { ModeSwitch } from '../Theme/ModeSwitch'

export function TopMenu() {
  // const pathname = usePathname()
  return (
    <div
      className={`
        flex flex-row items-center gap-2
        bg-gray-900 py-4 px-2
      `}
    >
      <LanguageMenu />
      <span className="flex-1" />
      <ModeSwitch />
    </div>
  )
}
