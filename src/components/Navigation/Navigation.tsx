import LanguageMenu from '../Internationalization/LanguageMenu'
import { ModeSwitch } from '../Theme/ModeSwitch'

export function Navigation() {
  // const pathname = usePathname()
  return (
    <nav className="flex flex-row items-center gap-2 py-4 px-2">
      <LanguageMenu />
      <span className="flex-1" />
      <ModeSwitch />
    </nav>
  )
}
