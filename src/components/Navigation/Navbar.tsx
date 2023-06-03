import ContactSideBar from '../Contact/ContactSideBar'
import { LanguageDropDown } from '../Internationalization/Dropdown/LanguageDropDown'
import { ThemeSwitch } from '../Theme/ThemeSwitch'
import { NavMenu } from './NavMenu'

export default function Navbar() {
  return (
    <>
      <nav
        className={`
        navbar bg-base-300 
        fixed top-0 z-10 gap-3
        sm:bg-opacity-30 hover:bg-opacity-100 
        sm:px-6 lg:px-8
      `}
      >
        <NavMenu />

        <LanguageDropDown className="ml-auto" />
        <ThemeSwitch />
      </nav>
      <div className="h-16 w-full"></div>
      <ContactSideBar />
    </>
  )
}
