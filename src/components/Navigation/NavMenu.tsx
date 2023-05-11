import { NavigationMenuOption } from '@/interfaces/navigation'

interface NavMenuProps {
  navigation: NavigationMenuOption[]
  anchor: string
  setAnchor: (value: string) => void
}

export function NavMenu({ navigation, anchor, setAnchor }: NavMenuProps) {
  return (
    <div className="hidden sm:flex sm:justify-start space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={`${item.href}`}
          aria-current={anchor === item.href ? 'page' : undefined}
          className={[
            anchor === item.href
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => setAnchor(item.href)}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
