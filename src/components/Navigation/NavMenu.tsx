import { NavigationMenuOption } from '@/interfaces/navigation'

interface NavMenuProps {
  navigation: NavigationMenuOption[]
}

export function NavMenu({ navigation }: NavMenuProps) {
  return (
    <div className="hidden sm:flex sm:justify-start space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
