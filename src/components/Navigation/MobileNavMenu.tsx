import { NavigationMenuOption } from '@/interfaces/navigation'
import { Disclosure } from '@headlessui/react'

interface MobileNavMenuProps {
  navigation: NavigationMenuOption[]
  setAnchor: (value: string) => void
}

export function MobileNavMenu({ navigation, setAnchor }: MobileNavMenuProps) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={['block rounded-md px-3 py-2 text-base font-medium']
              .filter(Boolean)
              .join(' ')}
            onClick={() => setAnchor(item.href)}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  )
}
