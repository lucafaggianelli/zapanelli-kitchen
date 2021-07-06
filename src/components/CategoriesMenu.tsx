import cn from 'classnames'
import React from 'react'

const CATEGORIES = [
  'appetizers',
  'entrees',
  'desserts',
  'cocktails'
]

export default function CategoriesMenu () {
  const isSelected = (category: string) =>
    category === CATEGORIES[1]

  return <nav className="flex justify-center max-w-full overflow-x-auto">
    {CATEGORIES.map(category => (
      <div
        key={category}
        className={cn(
          'tracking-wider text-sm uppercase mx-4 cursor-pointer',
          {
            'text-primary-500': !isSelected(category),
            'text-primary-800 border-primary-800 border-b font-bold': isSelected(category)
          }
        )}
      >
        {category}
      </div>
    ))}
  </nav>
}
