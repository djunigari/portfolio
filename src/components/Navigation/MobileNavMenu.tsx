import { NavigationMenuOption } from '@/interfaces/navigation'
import { Disclosure } from '@headlessui/react'

interface MobileNavMenuProps {
  navigation: NavigationMenuOption[]
}

export function MobileNavMenu({ navigation }: MobileNavMenuProps) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  )
}
