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
      <div className={`flex flex-wrap gap-1 justify-end ${className}`}>
        {list.map((item) => (
          <Skill key={item} name={item} />
        ))}
      </div>
    )
  } else {
    return (
      <div className={`flex flex-wrap gap-1 justify-end ${className}`}>
        <>
          {list.map(
            (item, index) => index < 3 && <Skill key={index} name={item} />,
          )}
        </>
        {list.length > 3 && !showAllItens && (
          <div
            className={`badge badge-outline text-xs cursor-pointer`}
            onClick={() => setShowAllItens(true)}
          >
            +{list.length - 3} (show all)
          </div>
        )}
      </div>
    )
  }
}
