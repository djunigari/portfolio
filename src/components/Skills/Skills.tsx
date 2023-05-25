'use client'
import { useState } from 'react'
import { Skill } from './Skill'

export function Skills({
  list,
  showAll = false,
  className,
}: {
  list: string[]
  showAll?: boolean
  className?: string
}) {
  const [showAllItens, setShowAllItens] = useState<boolean>(showAll)

  if (showAllItens) {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {list.map((item) => (
          <Skill key={item} name={item} />
        ))}
      </div>
    )
  } else {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        <>
          {list.map(
            (item, index) => index < 3 && <Skill key={index} name={item} />,
          )}
        </>
        {list.length > 3 && !showAllItens && (
          <div
            className={`
              inline-flex items-center rounded-md 
              bg-gray-50 px-2 py-1 
              text-xs text-gray-600 ring-1 ring-inset ring-gray-500/10
              cursor-pointer
            `}
            onClick={() => setShowAllItens(true)}
          >
            +{list.length - 3} (show all)
          </div>
        )}
      </div>
    )
  }
}
