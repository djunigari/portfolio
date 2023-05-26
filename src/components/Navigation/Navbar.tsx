import { LanguageDropDown } from '../Internationalization/Dropdown/LanguageDropDown'
import { ModeSwitch } from '../Theme/ModeSwitch'
import { ThemeSwitch } from '../Theme/ThemeSwitch'
import { NavMenu } from './NavMenu'

export default function Navbar() {
  return (
    <nav
      className={`
        sticky top-0 z-10 w-full bg-primaryBg px-2  mx-auto max-w-7xl 
        flex h-16 gap-3 items-center
        sm:bg-opacity-30 hover:bg-opacity-100 sm:px-6
        lg:px-8
      `}
    >
      <NavMenu />

      <LanguageDropDown className="ml-auto" />
      <ThemeSwitch />
      <ModeSwitch />
    </nav>
  )
}
